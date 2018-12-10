import { MissingTranslationStrategy } from '@angular/core';
import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { getTranslationProviders } from './i18n-providers';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

// use the require method provided by webpack
//declare const require;
// we use the webpack raw-loader to return the content as a string
//const translations = require(`raw-loader!./locale/messages.fr.xlf`);

getTranslationProviders().then(providers => {
    const options = { providers };
    console.log("Options now!!!");
    console.log(options);
    platformBrowserDynamic().bootstrapModule(AppModule, options);
});

//platformBrowserDynamic().bootstrapModule(AppModule, {
//    missingTranslation: MissingTranslationStrategy.Error,
//    providers: [
//        { provide: TRANSLATIONS, useValue: translations },
//        { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' }
//    ]
//});

import { TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';

export function getLanguage() {
    const lang = getCookie("lang");
    lang === "" ? "en" : lang;
    return lang;
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
export function getTranslationProviders(): Promise<Object[]> {

    // Get the locale id from the global
    // const locale = document['locale'] as string;
    const locale=getLanguage();
    // return no providers if fail to get translation file for locale
    const noProviders: Object[] = [];
    // No locale or U.S. English: no translation providers
    if (!locale || locale === 'en') {
        return Promise.resolve(noProviders);
    }
    // Ex: 'locale/messages.fr.xlf`
    const translationFile = `./locale/messages.${locale}.xlf`;

    console.log(translationFile);
    return getTranslationsWithSystemJs(translationFile)
        .then((translations: string) => [
            { provide: TRANSLATIONS, useValue: translations },
            { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
            { provide: LOCALE_ID, useValue: locale }
        ])
        .catch(() => noProviders); // ignore if file not found
}

declare var System: any;
declare const require;
function getTranslationsWithSystemJs(file: string): Promise<string> {
    alert("loading..."+file)
    // return System.import(file + '!text'); // relies on text plugin
    // console.log("loaded "+fileloaded);
    // var filename = `raw-loader!${file}`;
    // console.log(filename)
    let translations="";
    switch(file){
        case "./locale/messages.hi.xlf":
         translations = require(`raw-loader!./locale/messages.hi.xlf`);
         break;
        case "./locale/messages.fr.xlf":
        translations = require(`raw-loader!./locale/messages.fr.xlf`);
        break;
        //default:
        //translations = require(`raw-loader!./locale/messages.xlf`);
    }
  // const translations = require(`raw-loader!./locale/messages.hi.xlf`);

    //`raw-loader!./locale/messages.fr.xlf`
    if (translations)
       return Promise.resolve(translations);
    else
        Promise.reject("");
}
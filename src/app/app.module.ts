import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes  } from '@angular/router';

import { AppComponent } from '../app/app.component';
import { TrnslatePipe } from '../app/TraslatePipe';
import { Step1Component } from '../app/step1/step1.component';
import { Step2Component } from '../app/step2/step2.component';
import { Step3Component } from '../app/step3/step3.component';


@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot([
        { path: 'step1', component: Step1Component },
        { path: 'step2', component: Step2Component },
        { path: 'step3', component: Step3Component }
    ])],
    declarations: [AppComponent, TrnslatePipe, Step1Component, Step2Component, Step3Component],
    
    providers: [{ provide: LOCALE_ID, useValue: 'hi' }],
    bootstrap: [AppComponent]
})
export class AppModule {

}
import { LOCALE_ID } from '@angular/core';
import { Component } from '@angular/core';
import { Inject } from '@angular/core'
import { NgModel } from '@angular/forms';
import { LocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';
import { Derived } from './models/derived';

declare var check: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    message: string = "This is some other message";
    messageid = "@@message";
    baseMessage: string = "This is in English";
    title = 'app';
    day = "tuesday";
    regex = /[0-9]|\./;
    decimalCount = 0;
    isDecimalEntry = false;
    locale: string = "en";
    lang="";
    router: Router;
    obj: Derived;
    user = {
        name: "",
        email: "",
        currency: "",
        address: ""
    };
    
    constructor( @Inject(LOCALE_ID) locale: string, location: LocationStrategy, _router: Router) {
        this.router = _router;
        this.obj = new Derived(10);
        this.locale = locale;
        console.log('locale', locale);
        location.onPopState(() => {
            
            console.log('pressed back!');
            console.log(window.location.pathname);
            //if (window.location.pathname.endsWith("step3")) {
            //    console.log("from step3");
            //    router.navigate(["/"]);
            //}
           

        });
       // check();

    }
   
    callFun() {
        console.log("Called");
        check();
        }
    
    @HostListener('window:popstate', ['$event'])
    onPopState(event) {
        debugger;
        console.log('Back button pressed');
        if (window.location.pathname.endsWith("step3")) {
            console.log("from step3");
            this.router.navigateByUrl('/step1');
        }
    }

    convertToCurrencyFormat(event) {
     // var test= (1234568).toLocaleString("en-US", { style: "decimal", minimumFractionDigits: 2 });
        
        var num = event.target.value;
        num = parseFloat(num);
        var p = num.toFixed(2).split(".");
      var  formattedValue=  p[0].split("").reverse().reduce(function (acc, num, i, orig) {
            return num + (i && !(i % 3) ? "," : "") + acc;
        }, "") + "." + p[1];
        console.log(formattedValue);
        event.target.value = formattedValue;
       // event.target.value = test;
        return true;
    }
    validateOnlyNumbers(evt) {
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        var charCode = theEvent.keyCode || theEvent.which;
        if (charCode > 31 && (charCode < 48 || charCode > 57) && !(charCode == 46 || charCode == 8))
            return false;
        else {
            var len = evt.target.value.length;
            var index = evt.target.value.indexOf('.');
            if (index > 0 && charCode == 46) {
                return false;
            }
            if (index > 0) {
                var CharAfterdot = (len + 1) - index;
                if (CharAfterdot > 3) {
                    return false;
                }
            }

        }
        return true;
        
    }
    checkAlfa(event: any) {
        console.log("Key pressed" + event.target.value);
        if (event.target != null && event.currentTarget != null) {
            console.log(event.target);
            console.log(event.currentTarget);
            return true;
        }
        
        return false;
    }
    interval: any;
    timeout: any;
    mouseDown(e) {
        setTimeout(function () {
            console.log("Down")
            this.interval = window.setInterval(function () {
                
            }, 200);
        }, 400);
        e.preventDefault();
    }
    mouseUp() {
        console.log("Up")
        window.clearTimeout(this.timeout);
        window.clearInterval(this.interval);
    }
    Click() {
        console.log("clicked");
    }
    save(model, isvalid): boolean {
        if (isvalid) {
            console.log(model);
            return true;
        }
        return false;
    }

     setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }
      changeLang(lang:string){
          alert(lang);
        if(lang){
            this.setCookie("lang",lang,365);
        }
        //reload the page
        window.location.reload(true);
      }
}

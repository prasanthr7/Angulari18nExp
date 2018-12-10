import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'CustomTranslate'})
export class TrnslatePipe implements PipeTransform
{
    transform(textid: string,language:string): string {
        //search and return
       
       
        let msgs=["सोमवार","मंगलवार"];
        if(language==="hi"){
            if (textid === "monday") {
               
                 return msgs[0];
            } else if (textid === "tuesday") {
               
                 return msgs[1];
              }
        }
        
        return textid;
        
    }
}

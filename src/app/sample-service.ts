import { Injectable } from '@angular/core';
@Injectable()
export class SampleService
{
    getData(flag: Boolean): string {
        if (flag)
            return "Some Data";
        else
            return "Other Data";
    }
}
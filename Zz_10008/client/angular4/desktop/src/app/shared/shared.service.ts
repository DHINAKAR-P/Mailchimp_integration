import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
    public baseUrl: string = "http://apps.geppettosoftware.com/zz-web-10008";
    public browser_language: string;
}
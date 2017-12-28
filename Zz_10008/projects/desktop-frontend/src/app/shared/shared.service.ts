import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
    public baseUrl: string = "http://localhost:8080";
    public UIbaseUrl: string = "http://localhost:4200";
    public browser_language: string;
}
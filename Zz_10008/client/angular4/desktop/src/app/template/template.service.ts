import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import {  } from '..//';

@Injectable()
export class TemplateService {
    public selected_id: number;
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    get_all_Templates(): Observable<any>{
        return this.apiService.get(this.config.api_url+`/mailchimp/templates`);

    }

    create_Template(template: any): Observable<any>{
        return this.apiService.post(this.config.api_url+`/mailchimp/templates`,template);

    }

    get_default_Template(): Observable<any>{
        return this._http.get(this.config.app_url+`/assets/mailchimp/templates/gift_template.html`);
    }
}
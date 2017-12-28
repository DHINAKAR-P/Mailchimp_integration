import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import {  } from '..//';

@Injectable()
export class ListsService {
    public selected_id: number;
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    get_all_Lists(): Observable<any>{
        return this.apiService.get(this.config.api_url+`/mailchimp/`);

    }

    create_List(list: any): Observable<any>{
        return this.apiService.post(this.config.api_url+`/mailchimp/`,list);
    }
    add_member_to_list(listid: string,memberdata:any): Observable<any>{
        return this.apiService.post(this.config.api_url+`/mailchimp/${listid}/members`,memberdata);
    }

}
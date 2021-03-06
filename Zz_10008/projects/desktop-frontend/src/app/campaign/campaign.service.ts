import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import {  } from '..//';

@Injectable()
export class CampaignService {
    public selected_id: number;
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    get_all_Campaigns(): Observable<any>{
        return this.apiService.get(this.config.api_url+`/mailchimp/campaigns`);

    }

    get_Campaign_content(campaign_id: string): Observable<any>{
        return this.apiService.get(this.config.api_url+`/mailchimp/campaigns/${campaign_id}/content`);

    }

    get_Campaign(campaign_id: string): Observable<any>{
        return this.apiService.get(this.config.api_url+`/mailchimp/campaigns/${campaign_id}`);

    }

    create_Campaign(campaign: any): Observable<any>{
        return this.apiService.post(this.config.api_url+`/mailchimp/campaigns/`,campaign);
    }

    send_Campaign(campaign_id: string, userid: string): Observable<any>{
        return this.apiService.post(this.config.api_url+`/mailchimp/campaigns/${campaign_id}/${userid}/send`,{});
    }
    edit_template(template_id:string,compaign_template :any): Observable<any>{
        return this.apiService.put(this.config.api_url+`/mailchimp/campaigns/${template_id}`,compaign_template);
    }

    update_user_details(user: any): Observable<any>{
        return this.apiService.post(this.config.api_url+`/user/updatedetails`,user);
    }

    get_mail_details(id: number): Observable<any>{
        return this.apiService.get(this.config.api_url+`/user/findbyuserid/`+id);
    }
}

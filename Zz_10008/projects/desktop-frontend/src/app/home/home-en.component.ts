import {Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { CampaignService } from "../campaign/campaign.service";

@Component ({
    moduleId: module.id, 
    templateUrl: 'home-en.component.html'
})
export class HomeENComponent implements OnInit {
  private user_array;
  private select_opt_smtp:boolean;
  private select_opt_mailchimp : boolean;
  private mailchip:any={};
  private smtp:any={}
  @ViewChild('modalSFU')
   mymodalSFU: ModalComponent;

  constructor(private campaign_service: CampaignService) { 
  }

  ngOnInit() {
    var cookiedata = localStorage.getItem('currentUser');
    var json = JSON.parse(cookiedata);
    this.user_array = json.user;
    localStorage.setItem('mailchimp_API', this.user_array.mailchimp_api); 
    localStorage.setItem('mailchimp_URL', this.user_array.mailchimp_url); 

    this.mailchip.api_key='';
    this.mailchip.api_url='';
    this.smtp.domain='';
    this.smtp.smtp_email='';
    this.smtp.password='';

    if(this.user_array.mailchimp_api === null || this.user_array.mailchimp_api === '') {
      console.log("------------------------> ", this.user_array);
      this.mymodalSFU.open();
    }
  }

  select_opt_smtp_method(){
    this.select_opt_mailchimp =false;
    this.select_opt_smtp =true;
  }
  select_opt_mailchimp_method() {
    this.select_opt_mailchimp =true;
    this.select_opt_smtp =false;
  }

  save_details(){
    if(this.select_opt_mailchimp) {
      var current_user = JSON.parse(localStorage.getItem('currentUser'));
      var user_info = {
        mailchimp_api: this.mailchip.api_key,
        mailchimp_url: this.mailchip.api_url,
        _id: current_user.user._id
      }      

      console.log("this.mailchimp---> ", user_info, localStorage.getItem('currentUser'));
      this.campaign_service.update_user_details(user_info).subscribe(data => {
        console.log("data we are waiting for ===================> ", data);
        localStorage.setItem('mailchimp_API', data.mailchimp_api); 
        localStorage.setItem('mailchimp_URL',data.mailchimp_url); 
      },
      error => {
        
      });
    }

    if(this.select_opt_smtp){
      console.log("this.stmp---> ", this.smtp);
      var current_user = JSON.parse(localStorage.getItem('currentUser'));
      this.smtp._id = current_user.user._id;
      this.campaign_service.update_user_details(this.smtp).subscribe(data => {
        console.log("data we are waiting for ===================> ", data);
      },
      error => {
        
      });
    }
  }
}

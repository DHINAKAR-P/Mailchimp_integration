import {Component, OnInit,ViewChild} from '@angular/core';
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

  constructor(private campaign_service: CampaignService) {}

  ngOnInit() {
  this.mailchip.api_key = '';
    this.mailchip.api_url = '';
    this.smtp.domain = '';
    this.smtp.smtp_email = '';
    this.smtp.smtp_password = '';
    
      if (localStorage.getItem("currentUser")) {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.campaign_service.get_mail_details(currentUser.user._id).subscribe(data => {
        if (data.length > 0) {
          localStorage.setItem('mailchimp_API', data[0].mailchimp_api);
          localStorage.setItem('mailchimp_URL', data[0].mailchimp_url);
          localStorage.setItem('domain', data[0].domain);
        }
      })
    }
    var mailchimp_api = localStorage.getItem('mailchimp_API');
    var mailchimp_url = localStorage.getItem('mailchimp_URL');
    var domain = localStorage.getItem('domain');

  
    if ((domain === undefined || domain === null || domain === 'null' || domain === '') &&
     (mailchimp_api === undefined || mailchimp_api === null || mailchimp_api === '')) {
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
        userid: current_user.user._id,
        updated_date: '',
        domain: '',
        smtp_email: '',
        smtp_password: ''
      }      

      console.log("this.mailchimp---> ", user_info, localStorage.getItem('currentUser'));
      this.campaign_service.update_user_details(user_info).subscribe(data => {
        localStorage.setItem('mailchimp_API', data.mailchimp_api); 
        localStorage.setItem('mailchimp_URL',data.mailchimp_url); 
        this.mymodalSFU.dismiss();
        window.location.reload();
      },
      error => {

      });
    }

    if(this.select_opt_smtp){
      var current_user = JSON.parse(localStorage.getItem('currentUser'));
      var user_info1 = {
        mailchimp_api: '',
        mailchimp_url: '',
        userid: current_user.user._id,
        updated_date: '',
        domain: this.smtp.domain,
        smtp_email: this.smtp.smtp_email,
        smtp_password: this.smtp.smtp_password
      }  
      this.campaign_service.update_user_details(user_info1).subscribe(data => {
        localStorage.setItem('domain', data.domain); 
        this.mymodalSFU.dismiss();
        window.location.reload();
      },
      error => {

      });
    }
  }
}

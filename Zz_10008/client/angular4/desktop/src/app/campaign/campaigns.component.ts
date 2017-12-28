import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { CampaignService } from "./campaign.service";
import { ListsService } from "../list/list.service";
import { TemplateService } from "../template/template.service";

@Component({
    moduleId: module.id,
    templateUrl: 'campaigns.component.html',
    styleUrls: ['campaigns.component.css']
})
export class CampaignsComponent implements OnInit {
  private templates:any[];
  private lists:any[];
  private campaigns:any[];
  private campaign:any = {};

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private campaign_service: CampaignService
              , private list_service: ListsService, private template_service: TemplateService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  initialize(){
    this.campaign.settings = {};
    this.campaign.recipients = {};
    this.campaign.recipients.list_id = "";
    this.campaign.settings.template_id = 0;
    this.campaign.type = "regular";
  }
  ngOnInit() {
    this.initialize();
    this.campaign_service.get_all_Campaigns()
    .subscribe(data => {
      this.campaigns = data.campaigns;
    },
    error => {
      this.toastr.error('Check the browser console to see more info.','Error!');
    });

    this.list_service.get_all_Lists()
    .subscribe(data => {
      this.lists = data.lists;
    },
    error => {
      this.toastr.error('Check the browser console to see more info.','Error!');
    });

    this.template_service.get_all_Templates()
    .subscribe(data => {
      this.templates = data.templates;
    },
    error => {
      this.toastr.error('Check the browser console to see more info.','Error!');
    });
  }

  onSubmit(){
    this.campaign_service.create_Campaign(this.campaign)
    .subscribe(data => {
      console.log("data", data);
      this.initialize();
      this.toastr.success('Saved!');
    },
    error => {
      this.toastr.error('Check the browser console to see more info.','Error!');
    });
  }

  sendCampaign(campaign_id: string){
    this.campaign_service.send_Campaign(campaign_id)
    .subscribe(data => {
      console.log("data", data);
      this.initialize();
      this.toastr.success('Campaign sent!');
    },
    error => {
      this.toastr.error('Check the browser console to see more info.','Error!');
    });
  }

}
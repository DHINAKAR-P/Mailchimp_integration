import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { CampaignService } from "./campaign.service";
import { DomSanitizer } from '@angular/platform-browser';
declare var jquery:any;
declare var $ :any;

@Component({
    moduleId: module.id,
    templateUrl: 'campaign.component.html'
})
export class CampaignComponent implements OnInit {
  private campaign:any = {};
  private campaign_content:any = {};
  private input_template_fields:any[] = [];

  constructor(private router: Router, private route: ActivatedRoute, public toastr: ToastsManager, vcr: ViewContainerRef, private campaign_service: CampaignService,
    private sanitizer: DomSanitizer) { 
    this.toastr.setRootViewContainerRef(vcr);
    
    this.campaign.settings = {};
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getCampaign(id);
  }

  getCampaign(id: string){
    
    this.campaign_service.get_Campaign(id).subscribe(data => {
      this.campaign = data;
      this.getCampaignContent(id);
    },
    error => {
      this.toastr.error('Check the browser console to see more info.','Error!');
    });
  }

  getCampaignContent(id: string){
    this.campaign_service.get_Campaign_content(id).subscribe(data => {
      this.campaign_content = data;
      this.get_fields(this.campaign_content.html);
    },
    error => {
      this.toastr.error('Check the browser console to see more info.','Error!');
    });
  }

  get_fields(html_string: string){
    var first = html_string.indexOf("*G|");
    if(this.campaign.type === 'user' && first != -1){
      var field = html_string.substring(first+2,html_string.indexOf("|G*"));
      console.log(field);
      this.input_template_fields.push(field); 
      var new_html = html_string.substring(html_string.indexOf("|G*")+2);
      this.get_fields(new_html);
    } else {
      this.generate_form();
    }
  }

  generate_form(){
    for (var index = 0; index < this.input_template_fields.length; index++) {
      var element = this.input_template_fields[index];
      $('#inputTemplateForm').prepend("<div class=\"form-group\"><label for=\""+ element +"\">"+ element +"</label><input class=\"form-control\" id=\""+ element +"\" type=\"text\" placeholder=\""+ element +"\" \></div>")
    }
  }

  onSubmit(){

  }

}
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

  private temp_data_template:any[] =[];
  private myo :string ='';
  private dhinaOb:any={};

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
    console.log("getCampaignContent ------------- > ",id);
    this.campaign_service.get_Campaign_content(id).subscribe(data => {
      this.campaign_content = data;
      this.get_fields(this.campaign_content.html);
    },
    error => {
      this.toastr.error('Check the browser console to see more info.','Error!');
    });
  }

  get_fields(html_string: string){
    //console.log("get_fields ------------- > ",html_string);
    var first = html_string.indexOf("*G|");
    console.log("first count - > ",first);
    console.log("this.campaign.type - > ",this.campaign.type)
    if(this.campaign.type === 'regular' && first != -1){
      var field = html_string.substring(first+2,html_string.indexOf("|G*"));
      console.log("fields ------------- > ",field);
      this.input_template_fields.push(field); 
      var new_html = html_string.substring(html_string.indexOf("|G*")+2);
      this.get_fields(new_html);
    } else {
      this.generate_form();
    }
    this.temp_data_template = this.input_template_fields;
  }

  generate_form(){
    console.log("to et form boy - > ")
    for (var index = 0; index < this.input_template_fields.length; index++) {
      var element = this.input_template_fields[index];
      this.dhinaOb["item"+index] =element;
     //this.dhinaOb[element] =element;
      console.log("this--------------------- > ",this.dhinaOb);
      $('#inputTemplateForm').prepend("<div class=\"form-group\"><label for=\""+ element +"\">"+ element +"</label><input class=\"form-control\" id=\""+ element +"\"  +\"[(ngModel)]=dhinaOb.item"+index+"  type=\"text\" placeholder=\""+ element +"\" \></div>")
    }
    this.printObjetct();
  }

  printObjetct(){
    console.log("ONLY - > ",this.dhinaOb)
    
  }
  onSubmit(eee){
    console.log("I am Here Babeyy- > ",eee);
    var temp_html = this.campaign_content.html;
    var first_template = temp_html.indexOf("*G|");


  //   this.campaign_service.edit_template(id).subscribe(data => {
  //     this.campaign = data;
  //   },
  //   error => {
  //     this.toastr.error('Check the browser console to see more info.','Error!');
  //   });


 }

}
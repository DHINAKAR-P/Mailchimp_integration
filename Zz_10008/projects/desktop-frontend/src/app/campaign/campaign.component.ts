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
  content = "<button (click)=\"onSubmit(this.dhinaOb)\"\">Click Me</button>"
  private campaign:any = {};
  private campaign_content:any = {};
  private input_template_fields:any[] = [];
  private list_of_input = []

  private temp_data_template:any[] =[];
  private myo :string ='';
  private dhinaOb:any={};

  constructor(private router: Router, private route: ActivatedRoute, public toastr: ToastsManager, vcr: ViewContainerRef, private campaign_service: CampaignService,
    private sanitizer: DomSanitizer) { 
    this.toastr.setRootViewContainerRef(vcr);
    
    this.campaign.settings = {};
  }

  clicking(){
    alert("on click")
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
    console.log("get_fields ------------- > ",html_string);
    var first = html_string.indexOf("*G|");
    console.log("first count - > ",first);
    console.log("this.campaign.type - > ",this.campaign.type);
    if(this.campaign.type === 'regular' && first != -1){
      var field = html_string.substring(first+2,html_string.indexOf("|G*"));
      console.log("fields ------------- > ",field);
      this.input_template_fields.push(field); 
      var new_html = html_string.substring(html_string.indexOf("|G*")+2);
      this.get_fields(new_html);
      this.myo = new_html;
    } else {
      this.generate_form();
    }


  //  console.log("=Naveen>",this.input_template_fields)

    this.temp_data_template = this.input_template_fields;
  }

  generate_form(){
    console.log("to et form boy - > ")
    var array_input= [];
    for (var index = 0; index < this.input_template_fields.length; index++) {
      console.log("index is",this.input_template_fields[index]);
    //  var result = this.input_template_fields[index].slice(1,this.input_template_fields[index].length);
     var input = { 
       placeholder:this.input_template_fields[index], 
       name: this.input_template_fields[index],
       modelPropName: this.input_template_fields[index]
     }

     array_input.push(input) 
     // console.log("result ",result)
    //   var element = this.input_template_fields[index];
    //   this.dhinaOb["item"+index] =element;
    //  //this.dhinaOb[element] =element;
    //   console.log("this--------------------- > ",this.dhinaOb);
    //   $('#inputTemplateForm').prepend("<div class=\"form-group\"><label for=\""+ element +"\">"+ element +"</label><input class=\"form-control\" id=\""+ element +"\"  \"[(ngModel)]=dhinaOb.item"+index+"  type=\"text\" placeholder=\""+ element +"\" \></div>")
    }
    this.printObjetct(array_input);
  }

  printObjetct(array_input){
    this.list_of_input = array_input
    console.log("ONLY - > ",this.list_of_input);
  }
  onSubmit(eee){
   console.log("I am Here Babeyy- > ",eee);
   console.log("template id we are gettung ", this.campaign.settings.template_id)
   var temp_id = this.campaign.settings.template_id;
    var temp_html = this.myo;

   // var replaced = temp_html.replace("*G|HEADER|G*",'a');
    var data = {};
    Object.keys(eee).forEach(function(key) {
      console.log("key","*G"+key+"|G*")
      console.log("value",eee[key]);
      var res_key = key.substring(1).toLowerCase();
      data[res_key] = eee[key];
      // data[]
    //  console.log("str.indexOf",temp_html.indexOf("HEADER"));
    temp_html= temp_html.replace("*G"+key+"|G*",eee[key]);
    });

    console.log("------------------------eeeeee------------------>>> ", eee)
    console.log("ONLY - kist to parese> ",this.list_of_input);
    var mailchip_api = localStorage.getItem("mailchimp_API");
    var compaign_template = {};

    if(mailchip_api === undefined || mailchip_api === null  || mailchip_api === '') {
      compaign_template = {
        template: {
          sections: data,
          id: temp_id,
        }
      }
    } else {
      compaign_template = {
        template: {
          html: temp_html,
          id: temp_id,
        }
      }
      
    }


// var compaign_template = {
//   template: {
//     sections: data,
//     id: temp_id,
//   }
// }

// var compaign_template = {
//   template: {
//     html: temp_html,
//     id: temp_id,
//   }
// }

    this.campaign_service.edit_template(this.route.snapshot.paramMap.get('id'),compaign_template).subscribe(data => {
      this.campaign = data;
    },
    error => {
      this.toastr.error('Check the browser console to see more info.','Error!');
    });
    console.log("I am Here Babeyy- > ",compaign_template);
    
 }

}
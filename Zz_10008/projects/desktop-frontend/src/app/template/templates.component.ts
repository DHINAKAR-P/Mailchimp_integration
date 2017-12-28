import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { TemplateService } from "./template.service";

@Component({
    moduleId: module.id,
    templateUrl: 'templates.component.html'
})
export class TemplatesComponent implements OnInit {
  private templates:any[];
  private template:any = {};
  private template_default_html: string;
  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private template_service: TemplateService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.template_service.get_all_Templates()
    .subscribe(data => {
      this.templates = data.templates;
    },
    error => {
      this.toastr.error('Check the browser console to see more info.','Error!');
    });
    this.template_service.get_default_Template()
    .subscribe(html => {
      console.log("html", html);
      this.template_default_html = html._body;
      this.template.html = html._body;
    },
    error => {
      console.log(error);
      this.toastr.error('Check the browser console to see more info.','Error!');
    });
  }

  onSubmit(){
    this.template_service.create_Template(this.template)
    .subscribe(data => {
      this.toastr.success('Saved!');
      console.log("data", data);
    },
    error => {
      console.log("submit",error);
      this.toastr.error('Check the browser console to see more info.','Error!');
    });
  }

}
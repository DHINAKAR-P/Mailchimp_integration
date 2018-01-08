import {Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component ({
    moduleId: module.id, 
    templateUrl: 'home-en.component.html'
})
export class HomeENComponent implements OnInit {
  private user_array;
  @ViewChild('modalSFU')
   mymodalSFU: ModalComponent;

  ngOnInit() {
    var cookiedata = localStorage.getItem('currentUser');
    var json = JSON.parse(cookiedata);
    this.user_array = json.user;
    localStorage.setItem('mailchimp_API', this.user_array.mailchimp_api); 
    if(this.user_array.mailchimp_api === null || this.user_array.mailchimp_api === '') {
      console.log("------------------------> ", this.user_array);
      this.mymodalSFU.open();
    }
  }
}

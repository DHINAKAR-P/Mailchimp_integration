import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { PersonService } from './person.service';
import { IPerson } from './person';
import {  } from '';

@Component({
    moduleId: module.id,
    templateUrl: 'saveiteng.component.html'
})
export class SaveitengComponent implements OnInit {
  private person: IPerson = {
  	id: 0,
  	name: '',	price: 0
  }
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private personservice: PersonService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_Person(){
      this.personservice.create_Person(this.person)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}
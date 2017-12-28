import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ListsService } from "./list.service";

@Component({
  moduleId: module.id,
  templateUrl: 'list.component.html'
})

export class ListsComponent implements OnInit {
  private list: any = {};
  private lists: any[];
  @ViewChild('ADDMemberSFU')
  ADDMemberSFU: ModalComponent;
  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private lists_service: ListsService) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  initialize() {
    this.list = {};
    this.list.contact = {};
    this.list.campaign_defaults = {};
    this.list.permission_reminder = "You are a member of a generated geppetto application";
    this.list.email_type_option = false;
    this.list.campaign_defaults.language = "";
    this.list.contact.country = "";
    this.list.member = {
      email_address: '',
      id: 0,
      status: 'subscribed'
    };
  }

  ngOnInit() {
    this.initialize();
    this.lists_service.get_all_Lists()
      .subscribe(data => {
        this.lists = data.lists;
      },
      error => {
        this.toastr.error('Check the browser console to see more info.', 'Error!');
      });
  }

  onSubmit() {
    console.log(this.list);
    this.lists_service.create_List(this.list)
      .subscribe(data => {
        console.log("data", data);
        this.initialize();
        this.toastr.success('Saved!');
      },
      error => {
        this.toastr.error('Check the browser console to see more info.', 'Error!');
      });
  }


  addMembers(id) {
    this.list.member.id = id;
    this.list.member.email_address = "";
    this.ADDMemberSFU.open();
  }

  IncludeMembersToList() {
    this.ADDMemberSFU.close();
    this.lists_service.add_member_to_list(this.list.member.id, this.list.member)
      .subscribe(data => {
        this.initialize();
        this.toastr.success('MEMEBER ADDED TO THE LIST....!');
        this.list.member.email_address = "";
        this.list.member.id = 0;
        this.lists_service.get_all_Lists().subscribe(data => {
          this.lists = data.lists;
        },
          error => {
            this.toastr.error('Check the browser console to see more info.', 'Error!');
          });
      },
      error => {
        this.toastr.error('Check the browser console to see more info.', 'Error!');
        this.list.member.email_address = "";
        this.list.member.id = 0;
      });

  }

}
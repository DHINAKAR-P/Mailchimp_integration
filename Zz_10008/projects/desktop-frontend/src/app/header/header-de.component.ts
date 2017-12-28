import { Component, OnInit } from '@angular/core';
import { User } from '../login/User';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: './header-de.component.html',
})
export class HeaderDEComponent implements OnInit {
	private user;
	private admin;
    constructor( private router: Router, private authService: AuthService ) { }

    ngOnInit() { 
      var cookiedata = localStorage.getItem('currentUser');
      var json = JSON.parse(cookiedata);
      this.user = json.user;
      if(this.user.role=="ROLE_ADMIN"){
          this.admin = true;
      }
      console.log("the current user---->",this.user)
     }


      onsubmit(){    
        console.log("insie logout")
        this.authService.logout();

    }
}
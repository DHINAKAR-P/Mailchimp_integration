import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../config/user.service';
import { AuthService } from '../login/auth.service';
import { ApiService } from '../config/api.service';
import { ConfigService } from '../config/config.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';
import { CampaignService } from 'app/campaign/campaign.service';

@Component({
 
  templateUrl: './login.component.html',
  providers: [UserService,ApiService,ConfigService,AuthService,FormBuilder,CampaignService],
  styleUrls: ['style.css']
 
})
export class LoginComponent implements OnInit {
   data:any={};
  title = 'Login';
  submitted = false;
  errorDiagnostic: string;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private campaignService: CampaignService
  ) { 

  }

  ngOnInit() {
 
  }


  onSubmit() {

    this.submitted = true;
    this.errorDiagnostic = null;
     console.log("User----------->"+this.data.username);
    this.authService.login(this.data.username,this.data.password)
    .delay(1000)
    .subscribe(data => {
      console.log("-----------1323--------------------> > > > > >> > > > ", data)
      this.campaignService.get_mail_details(data.user._id).subscribe(data => {
        console.log("-------------------------------> > > > > >> > > > ", data);
        // localStorage.setItem("maildetails", JSON.parse(data[0]));
        localStorage.setItem('mailchimp_API', data[0].mailchimp_api); 
        localStorage.setItem('mailchimp_URL', data[0].mailchimp_url); 
        localStorage.setItem('domain', data[0].domain); 
        this.router.navigate(['/home']);
        window.location.reload();
      })
    },
    error => {
      this.submitted = false;
      this.errorDiagnostic = 'Incorrect username or password.';
    });

  }


}

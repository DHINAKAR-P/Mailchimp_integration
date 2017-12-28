import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/shared.service';
import { Router } from '@angular/router';
import { AuthService } from './login/auth.service';
import { User } from './login/User';

@Component ({
    selector: 'app-root',
    moduleId: module.id,
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{
    private currentUser: User;
    constructor(private authservice: AuthService,private shared_service: SharedService, private _router:Router){

    }

    ngOnInit() {
        var userLang = navigator.language;
        var split_user_lang = userLang.split("-");
        var split_user_lang_lowercase = split_user_lang[0].toLowerCase();
        this.shared_service.browser_language = split_user_lang_lowercase;
        console.log(split_user_lang_lowercase);
        this.authservice.getStatus().subscribe(currentUser => this.currentUser = currentUser);
       // console.log("current user----->"+this.currentUser)

    }


}
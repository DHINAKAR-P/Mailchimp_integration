import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Observable, Subject, BehaviorSubject} from 'rxjs';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { ConfigService } from '../config/config.service';

@Injectable()
export class AuthService {

  private subject: Subject<any>;

    constructor(private http: Http,private router: Router,private config: ConfigService)
 {
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //this.token = currentUser && currentUser.token;
    this.subject = new BehaviorSubject<any>(currentUser);

 }
 
    login(username: string, password: string) {
        return this.http.post(this.config.login_url, { username: username, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user)); 
                }
 
                return user;
            });
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.subject.next();
        this.router.navigate(['/login']);
    }

getStatus(): Observable<any> {
    // return observable to be notified of status updates (login/logout)
    return this.subject.asObservable();

  }

}
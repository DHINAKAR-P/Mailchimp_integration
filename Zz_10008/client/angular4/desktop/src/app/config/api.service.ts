import { Http, Headers, Response, RequestMethod } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {

  csrfToken: string;
  headers = new Headers({
    'Accept': 'application/json'
  });

  constructor(
    private http: Http
  ) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
        this.headers.append('Authorization', 'JWT ' + currentUser.token);
    }
  }

  anonGet(path: string): Observable<any> {
    return this.http.get(
      path,
      {
        headers: this.headers,
        withCredentials: true
      }
    )
    .map(this.extractData);
  }

  get(path: string): Observable<any> {  	 
    return this.http.get(
      path,
      {
        headers: this.headers,
        withCredentials: true
      }
    )
    .map(this.extractData)
    .catch(this.checkAuth.bind(this));
  }

    delete(path: string): Observable<any> {
    return this.http.get(
      path,
      {
        method: RequestMethod.Delete,
        headers: this.headers,
        withCredentials: true
      }
    )
    .map(this.extractData)
    .catch(this.checkAuth.bind(this));
  }

  post(path: string, body, customHeaders?, put?): Observable<any> {
    return this.http.request(
      path,
      {
        method: put ? RequestMethod.Put : RequestMethod.Post,
        body: body,
        headers: customHeaders || this.headers,
        withCredentials: true
      }
    )
    .map(this.extractData)
    .catch(this.checkAuth.bind(this));
  }

  put(path: string, body: any ,customHeaders?): Observable<any> {
    return this.http.request(
      path,
      {
        method: RequestMethod.Put,
        body: body,
        headers: customHeaders || this.headers,
        withCredentials: true
      }
    )
    .map(this.extractData)
    .catch(this.checkAuth.bind(this));
  }


  private extractData(res: Response) {
    const body = res.json();
    return body || { };
  }

  // Display error if logged in, otherwise redirect to IDP
  private checkAuth(error: any) {
    if (error && error.status === 401) {
      // this.redirectIfUnauth(error);
    } else {
      // this.displayError(error);
    }
    throw error;
  }

}


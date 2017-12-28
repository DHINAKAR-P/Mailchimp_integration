import { Injectable } from "@angular/core";
import { ConnectionBackend, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from "@angular/http";
import { SharedService } from '../shared/shared.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CustomHttp extends Http {
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private shared_service: SharedService) {
        super(backend, defaultOptions);
    }
 
    // get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    //     return super.get(this.shared_service.baseUrl + url, this.addJwt(options)).catch(this.handleError.bind(this));
    // }
 
    // post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    //     return super.post(this.shared_service.baseUrl + url, body, this.addJwt(options)).catch(this.handleError.bind(this));
    // }
 
    // put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    //     return super.put(this.shared_service.baseUrl + url, body, this.addJwt(options)).catch(this.handleError.bind(this));
    // }
 
    // delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    //     return super.delete(this.shared_service.baseUrl + url, this.addJwt(options)).catch(this.handleError.bind(this));
    // }
 
    // private helper methods
 
    private addJwt(options?: RequestOptionsArgs): RequestOptionsArgs {
        // ensure request options and headers are not null
        options = options || new RequestOptions();
        options.headers = options.headers || new Headers();
 
        // add authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            options.headers.append('Authorization', 'JWT ' + currentUser.token);
        }
 
        return options;
    }
 
    private handleError(error: any) {
        if (error.status === 401) {
            // 401 unauthorized response so log user out of client
      //      window.location.href = this.shared_service.baseUrl + '/login';
        }
 
        return Observable.throw(error._body);
    }
}
 
export function customHttpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, shared_service: SharedService): Http {
    return new CustomHttp(xhrBackend, requestOptions, shared_service);
}
 
export let customHttpProvider = {
    provide: Http,
    useFactory: customHttpFactory,
    deps: [XHRBackend, RequestOptions, SharedService]
};
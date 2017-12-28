import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IPerson } from './person';
import {  } from '..//';

@Injectable()
export class PersonService {
    public selected_id: number;
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_Person(person: IPerson): Observable<IPerson>{
        return this.apiService.post(this.config.api_url+`/Person_Default_Activity/Person/`,person);

    }
    update_Person(person: IPerson): Observable<IPerson>{
        return this.apiService.put(this.config.api_url+`/Person_Default_Activity/Person/`,person);

    }
    search_for_update_Person(person_id: number): Observable<IPerson>{
        return this.apiService.get(this.config.api_url+`/Person_Default_Activity/Person/${person_id}`);

    }
    delete_Person(person: IPerson): Observable<IPerson>{
        return this.apiService.delete(this.config.api_url+`/Person_Default_Activity/Person/${person.id}`);

    }
    get_all_Person(): Observable<IPerson[]>{
        return this.apiService.get(this.config.api_url+`/Person_Default_Activity/Person/`);

    }
}
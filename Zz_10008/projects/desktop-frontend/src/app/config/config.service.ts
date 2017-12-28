import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import { SharedService } from '../shared/shared.service';

@Injectable()
export class ConfigService {

    constructor(private restapi:SharedService){}

    private _api_url = '/api';

    private _auth_url = '/auth';

    private _login_url = this._auth_url + '/login';

    private _logout_url = this._auth_url + '/logout';

    get api_url() : string {return this._api_url;}

    get login_url() : string {return this._login_url;}

    get logout_url() : string {return this._logout_url;}

    get app_url() : string {return this.restapi.UIbaseUrl;}


}

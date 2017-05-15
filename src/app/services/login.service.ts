import { Inject, Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map"

import { BackendUri } from "./settings.service";
import { User } from '../entities/user';

@Injectable()
export class LoginService{
    constructor(
        private _http: Http,
        @Inject(BackendUri) private _backendUri){}

    login(user: User): Observable<User> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this._http
            .post(`${this._backendUri}api/rest-auth/login/`, user, options)
            .map((respuesta: Response)=>{
                let resp = respuesta.json();
                sessionStorage.jwt = resp.token;
                let loginUser: User = User.fromJson(resp.user);
                console.log(loginUser);

                return loginUser;
            });
    }
}
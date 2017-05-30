import { Inject, Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map"

import { BackendUri } from "./settings.service";
import { User } from '../entities/user';
import { UserReg } from '../entities/userReg';

@Injectable()
export class LoginService{
    constructor(
        private _http: Http,
        @Inject(BackendUri) private _backendUri: any){}

    login(user: User): Observable<User> {
        return this._http
            .post(`${this._backendUri}:8000/api/rest-auth/login/`, user)
            .map((respuesta: Response)=>{
                let resp = respuesta.json();
                sessionStorage['jwt'] = resp.token;

                let loginUser: User = User.fromJson(resp.user);
                return loginUser;
            });
    }

    registerUser(user: UserReg): Observable<User> {
        return this._http
            .post(`${this._backendUri}:8000/api/rest-auth/registration/`, user)
            .map((respuesta: Response)=>{
                let resp = respuesta.json();
                sessionStorage['jwt'] = resp.token;

                let loginUser: User = User.fromJson(resp.user);
                return loginUser;
            });
    }
}
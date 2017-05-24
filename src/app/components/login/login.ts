import { Component, OnDestroy, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { FormGroup } from "@angular/forms";

import { User } from '../../entities/user';
import { LoginService } from '../../services/login.service';
import { UserDataService } from '../../services/userdata.service';

@Component({
  selector: 'login',
  templateUrl:'./login.component.html',
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnDestroy {
    private _loginSubscription: Subscription;
    public _msgLogin: String;
    public _vMsg: boolean = false;

    @Output() _loginEvent: EventEmitter<User> = new EventEmitter();

    constructor(
        private _loginService: LoginService,
        private _userDataService: UserDataService,
        private _router: Router) { }

    ngOnDestroy(): void {
        this._unsubscribeLogin();
    }

    loginUser(form: FormGroup): void {
        this._unsubscribeLogin();

        let user: User = User.fromJson(form.value);
        this._loginSubscription = this._loginService.login(user)
        .subscribe(
            (data) => {
                this._userDataService.currentUser = data;
                this._router.navigate(["/post"]);
                this._loginEvent.emit(data);
            },
            (error) => {
                if(error.status == 400){
                    this._vMsg = true;
                    this._msgLogin = JSON.parse(error._body)['non_field_errors'][0];
                }
            }
        );
    }

    private _unsubscribeLogin(): void {
        if (this._loginSubscription) {
            this._loginSubscription.unsubscribe();
        }
    }
}
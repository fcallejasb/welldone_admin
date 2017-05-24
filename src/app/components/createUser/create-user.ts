import { Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { FormGroup } from "@angular/forms";

import { UserReg } from '../../entities/userReg';
import { LoginService } from '../../services/login.service';
import { UserDataService } from '../../services/userdata.service';

@Component({
  selector: 'create-user',
  templateUrl:'./create-user.component.html',
  styleUrls: ["./create-user.component.css"]
})

export class CreateUserComponent implements OnDestroy {
    private _loginSubscription: Subscription;
    public _msgRegistration: String;
    public _vMsg: boolean = false;

    constructor(
        private _loginService: LoginService,
        private _userDataService: UserDataService,
        private _router: Router) { }

    ngOnDestroy(): void {
        this._unsubscribeLogin();
    }

    createUser(form: FormGroup): void {
        this._unsubscribeLogin();

        let user: UserReg = UserReg.fromJson(form.value);
        this._loginSubscription = this._loginService.registerUser(user)
        .subscribe(
            (data) => {
                this._vMsg = false;
                this._userDataService.currentUser = data;
                this._router.navigate(["/post"]);
            },
            (error) => {
                if(error.status == 400){
                    this._msgRegistration = error._body;
                    console.log(JSON.parse(error._body));
                    this._vMsg = true;
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
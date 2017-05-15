import { Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { FormGroup } from "@angular/forms";

import { User } from '../../entities/user';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'login',
  templateUrl:'./login.component.html',
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnDestroy {
    private _loginSubscription: Subscription;

    constructor(
        private _loginService: LoginService,
        private _router: Router) { }

    ngOnDestroy(): void {
        this._unsubscribeLogin();
    }

    loginUser(form: FormGroup): void {
        this._unsubscribeLogin();

        let user: User = User.fromJson(form.value);
        this._loginSubscription = this._loginService.login(user).subscribe(() => this._router.navigate(["/post"]));
    }

    private _unsubscribeLogin(): void {
        if (this._loginSubscription) {
            this._loginSubscription.unsubscribe();
        }
    }
}
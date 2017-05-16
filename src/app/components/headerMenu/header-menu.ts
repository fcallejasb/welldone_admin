import { Component, Input } from "@angular/core";
import { User } from '../../entities/user';

@Component({
    selector: "header-menu",
    templateUrl: "./header-menu.component.html",
    styleUrls: ["./header-menu.component.css"]
})
export class HeaderMenuComponent{
    @Input() curUser: User;
    public _userName: String;
 }
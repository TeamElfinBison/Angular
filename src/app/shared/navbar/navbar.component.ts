import { UserInfoService } from './../../core/user-info/user-info.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {
    public isLoggedUser: boolean;
    public loggedUserUsername: string;

    constructor(private readonly userInfo: UserInfoService) { }

    ngOnInit() {
        this.isLoggedUser = this.userInfo.isLoggedUser();
        this.loggedUserUsername = this.userInfo.getUserUsername();
    }

    ngDoCheck() {
        this.isLoggedUser = this.userInfo.isLoggedUser();
        this.loggedUserUsername = this.userInfo.getUserUsername();
    }
}

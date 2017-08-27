import { UserAuthService } from './../../core/user-auth/user-auth.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {
    public isLoggedUser: boolean;
    public loggedUserUsername: string;

    constructor(private readonly userAuth: UserAuthService) { }

    ngOnInit() {
        this.isLoggedUser = this.userAuth.isLoggedUser;
        this.loggedUserUsername = this.userAuth.loggedUserUsername;
    }

    ngDoCheck() {
        this.isLoggedUser = this.userAuth.isLoggedUser;
        this.loggedUserUsername = this.userAuth.loggedUserUsername;
    }
}

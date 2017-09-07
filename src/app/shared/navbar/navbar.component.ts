import { UserInfoService } from './../../core/user-info/user-info.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';
import { LoginComponent } from '../authentication/login/login.component';
import { RegisterComponent } from '../authentication/register/register.component';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {
    public isLoggedUser: boolean;
    public loggedUserUsername: string;
    confirmResult: boolean = null;
    promptMessage: string;

    constructor(private readonly userInfo: UserInfoService,
        private dialogService: DialogService) { }

    ngOnInit() {
        this.isLoggedUser = this.userInfo.isLoggedUser();
        this.loggedUserUsername = this.userInfo.getUserUsername();
    }

    ngDoCheck() {
        this.isLoggedUser = this.userInfo.isLoggedUser();
        this.loggedUserUsername = this.userInfo.getUserUsername();
    }

    loginModal() {
        this.dialogService.addDialog(LoginComponent, { title: 'Log in' });
    }
    registerModal() {
        this.dialogService.addDialog(RegisterComponent, { title: 'Log in' });
    }
}


import { NotificatorService } from './../../core/notificator/notificator.service';
import { UserAuthService } from './../user-auth/user-auth.service';
import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    public user: User;

    constructor(
        private readonly userAuth: UserAuthService,
        private readonly notificator: NotificatorService,
        private readonly router: Router) { }

    ngOnInit() {
        this.user = new User();
    }

    registerUser() {
        this.userAuth.registerUser(this.user).subscribe(
            (response) => this.notificator.showSuccess(response['message']),
            (err) => this.notificator.showError(err.error.message),
            () => this.router.navigateByUrl('/login'));
    }
}

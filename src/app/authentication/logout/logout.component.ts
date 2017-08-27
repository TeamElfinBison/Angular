import { CookieService } from '../../core/cookie/cookie.service';
import { NotificatorService } from './../../core/notificator/notificator.service';
import { UserAuthService } from './../services/user-auth/user-auth.service';
import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

    constructor(
        private readonly requester: UserAuthService,
        private readonly notificator: NotificatorService,
        private readonly cookieService: CookieService,
        private readonly router: Router) { }

    ngOnInit() {
        const header = { token: this.cookieService.getCookie('token') };

        this.requester.logoutUser(header).subscribe(
            (response) => {
                this.cookieService.removeCookie('token');
                this.notificator.showSuccess(response.message);
            },
            (err) => this.notificator.showError(JSON.parse(err._body).message),
            () => this.router.navigateByUrl('/'));
    }
}

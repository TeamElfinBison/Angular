import { Cart } from './../../../models/Cart';
import { NotificatorService } from './../../../core/notificator/notificator.service';
import { UserAuthService } from './../user-auth/user-auth.service';
import { User } from './../../../models/User';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from '../../../core/cookie/cookie.service';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

export interface LoginModal {
    title: string;
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent extends DialogComponent<LoginModal, null> implements OnInit, LoginModal {

    public user: User = new User();
    public title: string;

    constructor(
        dialogService: DialogService,
        private readonly userAuth: UserAuthService,
        private readonly notificator: NotificatorService,
        private readonly cookieService: CookieService,
        private readonly router: Router,
    ) {
        super(dialogService);
    }

    ngOnInit() {
    }

    loginUser() {
        this.userAuth.loginUser(this.user).subscribe(
            (response) => {
                const user = response['data'][0].user;
                const cartItems = user.cart.pizza.length + user.cart.customPizza.length;

                this.cookieService.setCookie('token', response['data'][0].token);
                this.cookieService.setCookie('username', user.username);
                this.cookieService.setCookie('cartItems', cartItems.toString());
                this.cookieService.setCookie('cartPrice', user.cart.price.toString());

                this.notificator.showSuccess(response['message']);
                this.close();
            },
            (err) => this.notificator.showError(err.error.message),
        );
    }
}


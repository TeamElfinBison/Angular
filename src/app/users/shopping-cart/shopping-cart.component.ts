import { CookieService } from './../../core/cookie/cookie.service';
import { NotificatorService } from './../../core/notificator/notificator.service';
import { UsersDataService } from './../users-data/users-data.service';
import { Product } from './../../models/Product';
import { CustomPizza } from './../../models/CustomPizza';
import { Pizza } from './../../models/Pizza';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {
    public cart: (Pizza | CustomPizza)[] = [];

    constructor(
        private readonly userDataService: UsersDataService,
        private readonly notificator: NotificatorService,
        private readonly cookieService: CookieService
    ) { }

    ngOnInit() {
        const token = this.cookieService.getCookie('token');

        this.userDataService.getShoppingCart(token).subscribe(
            (response) => {
                this.cart = response['data'][0];
                console.log(this.cart);
            },
            (err) => this.notificator.showError(err.error.message));
    }
}

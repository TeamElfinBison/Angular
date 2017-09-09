import { Cart } from './../../models/Cart';
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
    public cart: Cart = new Cart();

    constructor(
        private readonly userDataService: UsersDataService,
        private readonly notificator: NotificatorService,
        private readonly cookieService: CookieService
    ) { }

    ngOnInit() {
        const token = this.cookieService.getCookie('token');

        this.userDataService.getShoppingCart(token).subscribe(
            (response) => this.cart = response['data'][0],
            (err) => this.notificator.showError(err.error.message));
    }

    removeCustomPizzaOrder(pizza: CustomPizza) {
        this.cart.customPizza = this.cart.customPizza
            .filter(x => {
                return Object.keys(pizza).some(key => {
                    if (pizza[key].length) {
                        return pizza[key].some(type => !!x[key].find(y => y !== type));
                    }

                    return pizza[key] !== x[key];
                });
            });

        const cartItems = +this.cookieService.getCookie('cartItems') - 1;
        const cartPrice = +this.cookieService.getCookie('cartPrice') - pizza.price;

        this.cookieService.setCookie('cartItems', cartItems.toString());
        this.cookieService.setCookie('cartPrice', cartPrice.toString());

        // needs refactoring !!
        const token = this.cookieService.getCookie('token');
        this.userDataService
            .deleteCustomPizzaFromCart(pizza.price.toString(), pizza, token).subscribe(
            (response) => this.notificator.showSuccess(response['message']),
            (err) => this.notificator.showError(err.error.message));
    }

    removeClassicPizzaOrder(pizza: Pizza) {
        console.log(event);
    }
}

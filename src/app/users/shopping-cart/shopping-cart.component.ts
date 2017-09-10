import { AlerterService } from './../../core/alerter/alerter.service';
import { Cart } from './../../models/Cart';
import { CookieService } from './../../core/cookie/cookie.service';
import { NotificatorService } from './../../core/notificator/notificator.service';
import { UsersDataService } from './../users-data/users-data.service';
import { Product } from './../../models/Product';
import { CustomPizza } from './../../models/CustomPizza';
import { Pizza } from './../../models/Pizza';
import { Component, OnInit, DoCheck } from '@angular/core';
import { Order } from '../../models/Order';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit, DoCheck {
    public cart: Cart = new Cart();

    constructor(
        private readonly userDataService: UsersDataService,
        private readonly notificator: NotificatorService,
        private readonly cookieService: CookieService,
        private readonly alerter: AlerterService
    ) { }

    ngOnInit() {
        const token = this.cookieService.getCookie('token');

        this.userDataService.getShoppingCart(token).subscribe(
            (response) => this.cart = response['data'][0],
            (err) => this.notificator.showError(err.error.message));
    }

    ngDoCheck() {
        this.cart.price = +this.cookieService.getCookie('cartPrice');
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
        this.cart.pizza = this.cart.pizza
            .filter(x => {
                return Object.keys(pizza).some(key => {
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
            .deleteClassicPizzaFromCart(pizza.price.toString(), pizza, token).subscribe(
            (response) => this.notificator.showSuccess(response['message']),
            (err) => this.notificator.showError(err.error.message));
    }

    orderPizza() {
        this.alerter.showPurchaseSuggestion()
            .then(() => {
                const order = new Order();
                order.items = this.cart;
                order.date = new Date();

                const token = this.cookieService.getCookie('token');
                return this.alerter.askForAddressSuggestion()
                    .then(() => {
                        this.userDataService.addOrderToUser(order, token)
                            .subscribe(
                            (response) => {
                                this.alerter.showSuccessAlert('Ordered!', 'The order is comming in 30 minutes!');
                                this.cart = new Cart();

                                this.cookieService.setCookie('cartItems', '0');
                                this.cookieService.setCookie('cartPrice', '0');
                            },
                            (err) => this.notificator.showError(err.error.message));
                    })
                    .catch(() => {
                        return this.alerter.getAddressSuggestion()
                            .then(() => {
                                this.userDataService.addOrderToUser(order, token)
                                    .subscribe(
                                    (response) => {
                                        this.alerter.showSuccessAlert('Ordered!', 'The order is comming in 30 minutes!');
                                        this.cart = new Cart();

                                        this.cookieService.setCookie('cartItems', '0');
                                        this.cookieService.setCookie('cartPrice', '0');
                                    },
                                    (err) => this.notificator.showError(err.error.message));
                            });
                    });
            })
            .catch((error: string) => {
                this.alerter.showErrorAlert('Cancelled', error);
            });
    }
}

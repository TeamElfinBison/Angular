import { Order } from './../../models/Order';
import { Pizza } from './../../models/Pizza';
import { CustomPizza } from './../../models/CustomPizza';
import { CookieService } from './../../core/cookie/cookie.service';
import { HttpHeaders } from '@angular/common/http';
import { RequesterService } from './../../core/requester/requester.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersDataService {

    constructor(private readonly requester: RequesterService) { }

    getCurrentUserInfo(token: string) {
        const headers = new HttpHeaders().set('token', token);
        return this.requester.get('/api/currentUser', headers);
    }

    deleteCustomPizzaFromCart(pizza: CustomPizza, token: string) {
        const headers = new HttpHeaders().set('token', token);
        return this.requester.put('/api/shoppingCart/customPizza', pizza, headers);
    }

    deleteClassicPizzaFromCart(pizza: Pizza, token: string) {
        const headers = new HttpHeaders().set('token', token);
        return this.requester.put('/api/shoppingCart/pizza', pizza, headers);
    }

    addOrderToUser(order: Order, token: string) {
        const headers = new HttpHeaders().set('token', token);
        return this.requester.post('/api/currentUser', order, headers);
    }
}

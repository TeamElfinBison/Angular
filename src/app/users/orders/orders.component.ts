import { Order } from './../../models/Order';
import { Component, OnInit } from '@angular/core';
import { CookieService } from './../../core/cookie/cookie.service';
import { UsersDataService } from './../users-data/users-data.service';
import { NotificatorService } from './../../core/notificator/notificator.service';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
    public orders: Order[] = [];

    constructor(
        private readonly userDataService: UsersDataService,
        private readonly notificator: NotificatorService,
        private readonly cookieService: CookieService
    ) { }

    ngOnInit() {
        this.userDataService.getUserOrders().subscribe(
            (response) => this.orders = response['data'][0],
            (err) => this.notificator.showError(err.error.message));
    }

    // TODO
    private displayOrderDetails(item) {
        return item.items.pizza[0].name;
        // alert(item.items.pizza[0].name);
    }

}

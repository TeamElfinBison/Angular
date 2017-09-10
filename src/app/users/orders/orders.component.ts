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
  public orders = [];

  constructor(
    private readonly userDataService: UsersDataService,
    private readonly notificator: NotificatorService,
    private readonly cookieService: CookieService
) { }

  ngOnInit() {
    const token = this.cookieService.getCookie('token');
            this.userDataService.getUserOrders(token).subscribe(
                (response) => {
                    this.orders = response['data'][0];
                    console.log(this.orders);
                },
                (err) => this.notificator.showError(err.error.message));
  }
}

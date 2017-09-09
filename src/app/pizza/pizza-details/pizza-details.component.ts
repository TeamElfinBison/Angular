import { PizzaDataService } from './../pizza-data/pizza-data.service';
import { UserInfoService } from './../../core/user-info/user-info.service';
import { AlerterService } from './../../core/alerter/alerter.service';
import { Pizza } from './../../models/Pizza';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-pizza-details',
    templateUrl: './pizza-details.component.html',
    styleUrls: ['./pizza-details.component.css']
})
export class PizzaDetailsComponent implements OnInit {
    @Input()
    public pizza = new Pizza();

    constructor(
        private readonly alerter: AlerterService,
        private readonly userInfoService: UserInfoService,
        private readonly pizzaDataService: PizzaDataService
    ) { }

    ngOnInit() {
    }

    orderPizza() {
        this.alerter
            .showOrderSuggestion(this.pizza._id, this.pizza.name, this.pizza.imgUrl)
            .then((id) => {
                if (this.userInfoService.isLoggedUser()) {

                } else {

                }
            })
            .catch(() => this.alerter.showErrorAlert('Cancelled', 'Eh, maybe next time :)'));
    }
}

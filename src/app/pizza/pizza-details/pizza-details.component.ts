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

    constructor(private readonly alerter: AlerterService) { }

    ngOnInit() {
    }

    orderPizza() {
        this.alerter.showOrderSuggestion('123', this.pizza.name, this.pizza.imgUrl)
            .then(console.log)
            .catch(console.log);
    }
}

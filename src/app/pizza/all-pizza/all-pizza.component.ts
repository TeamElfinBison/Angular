import { Pizza } from './../../models/Pizza';
import { NotificatorService } from './../../core/notificator/notificator.service';
import { PizzaDataService } from './../pizza-data/pizza-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-all-pizza',
    templateUrl: './all-pizza.component.html',
    styleUrls: ['./all-pizza.component.css']
})
export class AllPizzaComponent implements OnInit {
    public pizza: Pizza[];
    public currentPage = 1;

    constructor(
        private readonly pizzaDataService: PizzaDataService,
        private readonly notificator: NotificatorService) { }

    ngOnInit() {
        this.pizzaDataService.getAllPizza()
            .subscribe(response => this.pizza = response['data'][0],
            (err) => this.notificator.showError(err.error.message));
    }

    pageChanged(pageNumber){
        this.currentPage = pageNumber;
    }
}

import { Subscription } from 'rxjs/Subscription';
import { Pizza } from './../../models/Pizza';
import { NotificatorService } from './../../core/notificator/notificator.service';
import { PizzaDataService } from './../pizza-data/pizza-data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-all-pizza',
    templateUrl: './all-pizza.component.html',
    styleUrls: ['./all-pizza.component.css']
})
export class AllPizzaComponent implements OnInit, OnDestroy {
    public pizza: Pizza[];
    public subscription: Subscription;
    public currentPage = 1;
    public filter = 'all';

    constructor(
        private readonly pizzaDataService: PizzaDataService,
        private readonly notificator: NotificatorService) { }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    ngOnInit() {
        this.subscription = this.pizzaDataService.getAllPizza()
            .subscribe(response => this.pizza = response['data'][0],
            (err) => this.notificator.showError(err.error.message));
    }

    pageChanged(pageNumber) {
        this.currentPage = pageNumber;
    }

    changeFilter(event) {
        this.filter = event.target.innerHTML;
    }
}

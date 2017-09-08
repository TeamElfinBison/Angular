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

    constructor() { }

    ngOnInit() {
    }
}

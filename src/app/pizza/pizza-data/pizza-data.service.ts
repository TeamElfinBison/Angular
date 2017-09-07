import { RequesterService } from './../../core/requester/requester.service';
import { Injectable } from '@angular/core';

@Injectable()
export class PizzaDataService {
    constructor(private readonly requester: RequesterService) { }

    getAllPizza() {
        return this.requester.get('/api/pizza');
    }

    getProducts() {
        return this.requester.get('/api/products');
    }
}

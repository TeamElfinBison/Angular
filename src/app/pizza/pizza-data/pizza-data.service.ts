import { HttpHeaders } from '@angular/common/http';
import { Pizza } from './../../models/Pizza';
import { CustomPizza } from './../../models/CustomPizza';
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

    addPizzaToUserCart(pizza: (CustomPizza | Pizza), token: string) {
        const headers = new HttpHeaders().set('token', token);
        return this.requester.post('/api/currentUser', pizza, headers);
    }
}

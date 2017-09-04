import { HttpHeaders } from '@angular/common/http';
import { RequesterService } from './../../core/requester/requester.service';
import { Injectable } from '@angular/core';
import { CustomPizza } from '../../models/Pizza';

@Injectable()
export class CustomPizzaService {
    constructor(private readonly requester: RequesterService) { }

    addCustomPizza(customPizza: CustomPizza) {
        console.log(customPizza);
        // return this.requester.post('nqkoj si', customPizza);
    }

}

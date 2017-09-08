import { PizzaDataService } from './pizza-data/pizza-data.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { CustompizzaComponent } from './custompizza/custompizza.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzaRoutingModule } from './pizza-routing.module';
import { AllPizzaComponent } from './all-pizza/all-pizza.component';
import { PizzaDetailsComponent } from './pizza-details/pizza-details.component';

@NgModule({
    declarations: [
        CustompizzaComponent,
        AllPizzaComponent,
        PizzaDetailsComponent,
    ],
    imports: [
        SharedModule,
        PizzaRoutingModule,
        FormsModule,
    ],
    providers: [
        PizzaDataService
    ]
})
export class PizzaModule { }

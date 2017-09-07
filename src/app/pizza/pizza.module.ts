import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { ProductsComponent } from './products/products.component';
import { CustompizzaComponent } from './custompizza/custompizza.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzaRoutingModule } from './pizza-routing.module';
import { AllPizzaComponent } from './all-pizza/all-pizza.component';

@NgModule({
    declarations: [
        CustompizzaComponent,
        ProductsComponent,
        AllPizzaComponent
    ],
    imports: [
        SharedModule,
        PizzaRoutingModule,
        FormsModule
    ],
})
export class PizzaModule { }

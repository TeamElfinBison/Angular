import { SharedModule } from './../shared/shared.module';
import { UsersDataService } from './users-data/users-data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ProfileComponent } from './profile/profile.component';
<<<<<<< HEAD
import { OrdersComponent } from './orders/orders.component';
=======
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
>>>>>>> master

@NgModule({
    imports: [
        SharedModule,
        UsersRoutingModule
    ],
    declarations: [
        ProfileComponent,
<<<<<<< HEAD
        OrdersComponent
=======
        ShoppingCartComponent
>>>>>>> master
    ],
    providers: [
        UsersDataService
    ]
})
export class UsersModule { }

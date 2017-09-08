import { SharedModule } from './../shared/shared.module';
import { UsersDataService } from './users-data/users-data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    imports: [
        SharedModule,
        UsersRoutingModule
    ],
    declarations: [
        ProfileComponent
    ],
    providers: [
        UsersDataService
    ]
})
export class UsersModule { }

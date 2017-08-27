import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { AllUsersComponent } from './all-users/all-users.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        ProfileComponent,
        AllUsersComponent,
    ]
})
export class UsersModule { }

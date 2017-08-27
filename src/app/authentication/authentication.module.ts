import { UserAuthService } from './user-auth/user-auth.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
    imports: [
        SharedModule,
        FormsModule
    ],
    declarations: [
        RegisterComponent,
        LoginComponent,
        LogoutComponent
    ],
    providers: [
        UserAuthService
    ]
})
export class AuthenticationModule { }

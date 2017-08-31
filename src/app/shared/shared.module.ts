import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdMenuModule
} from '@angular/material';

import { NavbarComponent } from './navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from '../authentication/login/login.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { RegisterComponent } from '../authentication/register/register.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        BootstrapModalModule,

        MdButtonModule,
        MdToolbarModule,
        MdIconModule,
        MdInputModule,
        MdMenuModule,
    ],
    declarations: [
        NavbarComponent,
        FooterComponent,
  ],
  entryComponents: [
      LoginComponent,
      RegisterComponent
  ],
    exports: [
        NavbarComponent,
        FooterComponent,
        CommonModule,

        MdButtonModule,
        MdToolbarModule,
        MdIconModule,
        MdInputModule,
        MdMenuModule
    ]
})
export class SharedModule { }

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


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,

        MdButtonModule,
        MdToolbarModule,
        MdIconModule,
        MdInputModule,
        MdMenuModule,
    ],
    declarations: [
        NavbarComponent,
        FooterComponent
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

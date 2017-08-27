import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MdSidenavModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdMenuModule
} from '@angular/material';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    imports: [
        CommonModule,
        MdButtonModule,
        MdSidenavModule,
        MdToolbarModule,
        MdIconModule,
        MdInputModule,
        MdMenuModule,
        RouterModule
    ],
    declarations: [
        NavbarComponent
    ],
    exports: [
        CommonModule,
        NavbarComponent,
        MdButtonModule,
        MdToolbarModule,
        MdIconModule,
        MdSidenavModule,
        MdInputModule,
        MdMenuModule
    ]
})
export class SharedModule { }

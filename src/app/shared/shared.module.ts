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

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        MdButtonModule,
        MdToolbarModule,
        MdIconModule,
        MdInputModule,
        MdMenuModule,
    ],
    declarations: [
        NavbarComponent
    ],
    exports: [
        NavbarComponent,

        CommonModule,

        MdButtonModule,
        MdToolbarModule,
        MdIconModule,
        MdInputModule,
        MdMenuModule
    ]
})
export class SharedModule { }

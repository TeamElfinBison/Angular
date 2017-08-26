import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MdSidenavModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule
} from '@angular/material';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    imports: [
        CommonModule,
        MdButtonModule,
        MdSidenavModule,
        MdToolbarModule,
        MdIconModule,
        MdInputModule
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
        MdInputModule
    ]
})
export class SharedModule { }

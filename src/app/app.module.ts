import { UsersModule } from './users/users.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent,
        ProductsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ToastModule.forRoot(),
        NgbModule.forRoot(),
        SharedModule,
        CoreModule,
        FormsModule,
        AuthenticationModule,
        UsersModule,
        HttpClientModule,
        NgHttpLoaderModule
    ],
    providers: [
        CookieService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }

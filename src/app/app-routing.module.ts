import { AuthGuardService } from './core/auth-guard/auth-guard.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { AddComponent } from './components/products/add/add.component';
import { CustompizzaComponent } from './components/custompizza/custompizza.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'users', loadChildren: './users/users.module#UsersModule' },

    { path: 'products', component: ProductsComponent },
    { path: 'custompizza', component: CustompizzaComponent },
    { path: 'products/add', component: AddComponent },
    { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService] },

    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

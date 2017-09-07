import { ProductsComponent } from './products/products.component';
import { CustompizzaComponent } from './custompizza/custompizza.component';
import { AllPizzaComponent } from './all-pizza/all-pizza.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: 'all', component: AllPizzaComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'custompizza', component: CustompizzaComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PizzaRoutingModule { }

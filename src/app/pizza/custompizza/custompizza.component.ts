import { Component, OnInit } from '@angular/core';
import { CustomPizza } from '../../models/Pizza';
import { NotificatorService } from '../../core/notificator/notificator.service';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { Router } from '@angular/router';
import { UserInfoService } from '../../core/user-info/user-info.service';
import { LoginComponent } from '../../shared/authentication/login/login.component';
export interface CustomPizzaModal {
    title: string;
}

@Component({
    selector: 'app-custompizza',
    templateUrl: './custompizza.component.html',
    styleUrls: ['./custompizza.component.css']
})
export class CustompizzaComponent extends DialogComponent<CustomPizzaModal, null> implements OnInit, CustomPizzaModal {
    isLoggedUser: boolean;
    public custompizza: CustomPizza;
    public price = 0;
    title: string;
    constructor(
        private readonly userInfo: UserInfoService,
        dialogService: DialogService,
        private readonly notificator: NotificatorService,
        private readonly router: Router) {
        super(dialogService);
    }

    ngOnInit() {

        this.custompizza = new CustomPizza;
    }
    add(el) {
        const type = el.target.parentElement.parentElement.parentElement.attributes.ngmodelgroup.nodeValue;
        const productId = el.target.attributes.id.nodeValue;
        const element = this.findObjectByKey(this.custompizza[type], 'id', productId);

        if (type === 'dough') {
            this.custompizza.dough.forEach(dough => {
                if (dough.add) {
                    dough.add = false;
                    this.price = this.price - 2;
                }

            });
        }

        element.add = el.target.checked;

        if (element.add) {
            this.price = this.price + element.price;
        } else {
            this.price = this.price - element.price;
        }
    }

    addToCart() {
        this.isLoggedUser = this.userInfo.isLoggedUser();

        if (!this.isLoggedUser) {
            this.notificator.showError('You have to be loged!');
            this.loginModal();
            return;
        }

        let isDoughSelected = false;
        const selectedPizza = {
            dough: {},
            sauce: [],
            cheese: [],
            meat: [],
            vegetables: [],
        };
        this.custompizza.dough.forEach(dough => {
            if (dough.add) {
                isDoughSelected = true;
                selectedPizza.dough = dough;
            }
        });
        this.custompizza.sauce.forEach(sauce => {
            if (sauce.add) {
                selectedPizza.sauce.push(sauce);
            }
        });
        this.custompizza.cheese.forEach(cheese => {
            if (cheese.add) {
                selectedPizza.cheese.push(cheese);
            }
        });
        this.custompizza.meat.forEach(meat => {
            if (meat.add) {
                selectedPizza.meat.push(meat);
            }
        });
        this.custompizza.vegetables.forEach(vegetables => {
            if (vegetables.add) {
                selectedPizza.vegetables.push(vegetables);
            }
        });


        if (isDoughSelected) {

            // Add selected pizza to cart
            console.log(JSON.stringify(selectedPizza) + ' on price: ' + this.price + '$ Added to cart');
            this.notificator.showSuccess('Custom pizza on price: ' + this.price + '$ Added to cart');
            this.router.navigate(['/products']);
        } else {
            console.log('You have to select dought first!');
            this.notificator.showError('You have to select dought first!');
        }
    }

    findObjectByKey(array, key, value) {
        for (let i = 0; i < array.length; i++) {
            if (array[i][key] === value) {
                return array[i];
            }
        }
        return null;
    }
    loginModal() {
        this.dialogService.addDialog(LoginComponent, { title: 'Log in' });
    }
}

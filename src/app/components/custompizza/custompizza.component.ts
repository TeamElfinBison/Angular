import { Component, OnInit } from '@angular/core';
import { CustomPizza } from '../../models/Pizza';
import { CustomPizzaService } from './custompizza.service';
import { NotificatorService } from '../../core/notificator/notificator.service';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { Router } from '@angular/router';
import { UserInfoService } from '../../core/user-info/user-info.service';
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
  private custompizza: CustomPizza;
  private price = 0;
  title: string;
  constructor(
    private readonly userInfo: UserInfoService,
    dialogService: DialogService,
    private readonly customPizza: CustomPizzaService,
    private readonly notificator: NotificatorService,
    private readonly router: Router) {super(dialogService);

    }

  ngOnInit() {
            this.isLoggedUser = this.userInfo.isLoggedUser();

    this.custompizza = new CustomPizza;

    // get custompizza from DB!
    this.custompizza = {
  'name': 'Custom pizza',
  'dough': [
    {
      'name': 'White',
      'add': false,
      'price': 2,
      'id':  '1-bg',
    },
    {
      'name': 'Wholegrain',
      'add': false,
      'price': 2,
      'id':  '2-bg',
    },
    {
      'name': 'Gluten Free',
      'add': false,
      'price': 2,
      'id':  '39-en',
    }
  ],
  'sauce': [
    {
      'name': 'Tomatoe Sauce',
      'add': false,
      'price': 0.5,
      'id':  '3-bg',
    },
    {
      'name': 'Cream',
      'add': false,
      'price': 0.5,
      'id':  '4-bg',
    },
    {
      'name': 'Barbecue',
      'add': false,
      'price': 0.5,
      'id':  '5-en',
    }
  ],
  'cheese': [
    {'name': 'emmental',
    'add': false,
      'price': 0.5,
      'id':  '35-en',
    },
    {
      'name': 'cheddar',
      'add': false,
      'price': 0.5,
      'id':  '9-bg',
    },
    {'name': 'blue',
    'add': false,
      'price': 0.5,
      'id':  '34-en',
    },
    {'name': 'parmesan',
    'add': false,
      'price': 0.5,
      'id':  '8-bg',
    },
    {'name': 'freshmozzarella',
    'add': false,
      'price': 0.5,
      'id':  '33-en',
    },
    {'name': 'white',
    'add': false,
      'price': 0.5,
      'id':  '7-bg',
    },
    {'name': 'mozzarella',
    'add': false,
      'price': 0.5,
      'id':  '6-bg',
    },
    {'name': 'melted',
    'add': false,
      'price': 0.5,
      'id':  '32-en',
    }
  ],
  'meat': [
    {
      'name': 'pork',
    'add': false,
      'price': 0.5,
      'id':  '30-en',
    },
    {'name': 'chorizo',
    'add': false,
      'price': 0.5,
      'id':  '29-en',
    },
    {'name': 'ham',
    'add': false,
      'price': 0.5,
      'id':  '28-en',
    },
    {'name': 'sausages',
    'add': false,
      'price': 0.5,
      'id':  '27-en',
    },
    {'name': 'chicken',
    'add': false,
      'price': 0.5,
      'id':  '13-bg',
    },
    {'name': 'pepperoni',
    'add': false,
      'price': 0.5,
      'id':  '12-bg',

    },
    {'name': 'ventricina',
    'add': false,
      'price': 0.5,
      'id':  '11-bg',

    },
    {'name': 'prosciutto',
    'add': false,
      'price': 0.5,
      'id':  '10-bg',

    },
    {'name': 'spicybeef',
    'add': false,
      'price': 0.5,
      'id':  '25-en',

    },
    {'name': 'bacon',
    'add': false,
      'price': 0.5,
      'id':  '26-en',

    }
  ],
  'vegetables': [
    {'name': 'rucola',
    'add': false,
      'price': 0.5,
      'id':  '20-bg',

    },
    {'name': 'tomatoes',
    'add': false,
      'price': 0.5,
      'id':  '14-bg',

    },
    {'name': 'mushrooms',
    'add': false,
      'price': 0.5,
      'id':  '15-bg',

    },
    {'name': 'redOnions',
    'add': false,
      'price': 0.5,
      'id':  '21-bg',

    },
    {'name': 'driledTomatoes',
    'add': false,
      'price': 0.5,
      'id':  '36-bg',

    },
    {'name': 'jalapenos',
    'add': false,
      'price': 0.5,
      'id':  '16-bg',

    },
    {'name': 'corn',
    'add': false,
      'price': 0.5,
      'id':  '17-bg',

    },
    {'name': 'pineapple',
    'add': false,
      'price': 0.5,
      'id':  '37-bg',

    },
    {'name': 'pickels',
    'add': false,
      'price': 0.5,
      'id':  '38-en',

    },
    {'name': 'olives',
    'add': false,
      'price': 0.5,
      'id':  '18-bg',

    },
    {'name': 'greenPepers',
    'add': false,
      'price': 0.5,
      'id':  '19-bg',
       },
    {'name': 'redPeppers',
    'add': false,
      'price': 0.5,
      'id':  '41-en',
       }
  ],
};
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
  }else {
    this.price = this.price - element.price;
  }
}

addToCart() {
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
  }else {
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
}

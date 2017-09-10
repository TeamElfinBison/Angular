import { Cart } from './Cart';
import { CustomPizza } from './CustomPizza';
import { Pizza } from './Pizza';
import { Product } from './Product';

export class User {
    username: string;
    firstName: string;
    lastName: string;
    password: string;
    cart: Cart;
    orders: object[];
}

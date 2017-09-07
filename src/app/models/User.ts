import { Pizza } from './Pizza';
import { Product } from './Product';

export class User {
    username: string;
    firstName: string;
    lastName: string;
    password: string;
    cart: (Product | Pizza)[];
}

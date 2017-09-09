import { CustomPizza } from './CustomPizza';
import { Pizza } from './Pizza';

export class Cart {
    items: (Pizza | CustomPizza)[];
    price: number;
}

import { Item } from "./item.model";


export class cartItem {
  constructor (
     public cartItem: Item,
     public quantity: number
    ) {}
}
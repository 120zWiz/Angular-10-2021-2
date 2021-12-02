import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemsInService: {cartItem: Item, quantity: number }[] = [];
  cartChanged = new Subject();


  constructor() { }
}

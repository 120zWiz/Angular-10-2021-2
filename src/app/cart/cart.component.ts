import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  //  kooloniga kirjutan tyybi, v6rdusmargiga annan vaartuse
  cartItems: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // ostukorvi minek - pannakse kaima kui minnakse 
    // selle component htmli peale
    // see funktsioon laheb enne HTMLi kaima
    // v6tame k6ik esemed mis on ostukorvi lisatud
    console.log("cart componendis");

    this.cartItems = this.cartService.cartItemsInService;
  }

}

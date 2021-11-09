import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  //  kooloniga kirjutan tyybi, v6rdusmargiga annan vaartuse
  // tyybiks yksk6ik milline massiv ja vaartuseks tyhi massiiv
  // ilma tyybita ma ei saa talle algvaartust anda, sest ta peab teadma mille massiv ta on

  cartItems: Item[] = [];

  sumOfCart = 0;

  constructor(private cartService: CartService) { }

  // laheb tapselt ennem HTMLi kaimapanemist kaima
  ngOnInit(): void {
    // ostukorvi minek - pannakse kaima kui minnakse 
    // selle component htmli peale
    // see funktsioon laheb enne HTMLi kaima
    // v6tame k6ik esemed mis on ostukorvi lisatud
    // kuvab brauserisse console i mingisuguse s6numi
    // parem klik > inspect > console brauseris
    console.log("cart componendis");

    this.cartItems = this.cartService.cartItemsInService;
    this.sumOfCart = 0;
    this.cartItems.forEach(cartItem => this.sumOfCart = this.sumOfCart + cartItem.price); 
    // lyhend ylal olevale commandile = this.cartItems.forEach(toode => this.sumOfCart =+ toode.price);
  }                                                
      
  onEmptyCart() {
    this.cartService.cartItemsInService = [];
    this.cartItems = this.cartService.cartItemsInService;
    this.sumOfCart = 0;
  }

  onDeleteFromCart(item: Item) {
    // siin on mingi esemete massiiv nt. hind ja pealkiri 
    let index = this.cartService.cartItemsInService.indexOf(item);
    console.log(index)
    this.cartService.cartItemsInService.splice(index,1);
    this.sumOfCart = 0;
    this.cartItems.forEach(cartItem => this.sumOfCart = this.sumOfCart + cartItem.price);
  }

}

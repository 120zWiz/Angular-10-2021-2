import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
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

  cartItems: {cartItem: Item, quantity: number }[] = [];

  sumOfCart = 0;

  constructor(private cartService: CartService,
    private cookieService: CookieService) { }

  // laheb tapselt ennem HTMLi kaimapanemist kaima
  ngOnInit(): void {
    // ostukorvi minek - pannakse kaima kui minnakse 
    // selle component htmli peale
    // see funktsioon laheb enne HTMLi kaima
    // v6tame k6ik esemed mis on ostukorvi lisatud
    // kuvab brauserisse console i mingisuguse s6numi
    // parem klik > inspect > console brauseris
    // this.cartItems = this.cartService.cartItemsInService;
    if (this.cookieService.get("products")) {
      this.cartItems = JSON.parse(this.cookieService.get("products"));
    } else {
      this.cartItems = this.cartService.cartItemsInService;
    }
    this.sumOfCart = this.cartService.calculateSumOfCart();
    
  }  
  
  
      
  onEmptyCart() {
    this.cartService.cartItemsInService = [];
    this.cartItems = this.cartService.cartItemsInService;
    this.sumOfCart = 0;
    this.cartService.cartChanged.next();
    this.cookieService.set("products",JSON.stringify(this.cartService.cartItemsInService));
  }

  onDeleteOneFromCart(cartItem:{cartItem: Item, quantity: number}) {
    if (cartItem.quantity > 1) {
      let index = this.cartService.cartItemsInService.findIndex(item => item.cartItem.id == cartItem.cartItem.id);
      this.cartService.cartItemsInService[index].quantity--;
      this.cartItems = this.cartService.cartItemsInService;
      cartItem.quantity--;
      this.sumOfCart = this.cartService.calculateSumOfCart();
    } else {
      this.onDeleteFromCart(cartItem);
    }
    this.cookieService.set("products",JSON.stringify(this.cartService.cartItemsInService));
  }

  onDeleteFromCart(cartItem:{cartItem: Item, quantity: number}) {
    let index = this.cartService.cartItemsInService.indexOf(cartItem);
    this.cartService.cartItemsInService.splice(index,1);
    this.sumOfCart = this.cartService.calculateSumOfCart();
    this.cookieService.set("products",JSON.stringify(this.cartService.cartItemsInService));
  }

  onAddToCart(cartItem:{cartItem: Item, quantity: number}) {
    let index = this.cartService.cartItemsInService.findIndex(item => item.cartItem.id == cartItem.cartItem.id);
    this.cartService.cartItemsInService[index].quantity++;
    this.cartItems = this.cartService.cartItemsInService;
    cartItem.quantity++;
    this.sumOfCart = this.cartService.calculateSumOfCart();
    this.cookieService.set("products",JSON.stringify(this.cartService.cartItemsInService));
   
    
  }

  private calculateSumOfCart() {
    this.sumOfCart = 0;
    this.cartItems.forEach(cartItem => this.sumOfCart = this.sumOfCart + cartItem.cartItem.price * cartItem.quantity);
    this.cartService.cartChanged.next()
  }

}

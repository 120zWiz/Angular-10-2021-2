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

  sumOfCart = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // ostukorvi minek - pannakse kaima kui minnakse 
    // selle component htmli peale
    // see funktsioon laheb enne HTMLi kaima
    // v6tame k6ik esemed mis on ostukorvi lisatud
    console.log("cart componendis");

    this.cartItems = this.cartService.cartItemsInService;
    this.sumOfCart = 0;
    this.cartItems.forEach(toode => this.sumOfCart = this.sumOfCart + toode.price); 
    // lyhend ylal olevale commandile = this.cartItems.forEach(toode => this.sumOfCart =+ toode.price);
  }                                                
      
  onEmptyCart() {
    this.cartService.cartItemsInService = [];
    this.cartItems = this.cartService.cartItemsInService;
  }

  onDeleteFromCart(ese: any) {
    // siin on mingi esemete massiiv nt. hind ja pealkiri 
    let j2rjekorranumber = this.cartService.cartItemsInService.indexOf(ese);
    this.cartService.cartItemsInService.splice(j2rjekorranumber,1);
    this.sumOfCart = 0;
    this.cartItems.forEach(toode => this.sumOfCart = this.sumOfCart + toode.price);
  }

}

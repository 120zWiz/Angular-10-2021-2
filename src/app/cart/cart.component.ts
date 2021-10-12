import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      // ostukorvi minek - pannakse kaima kui minnakse 
    // selle component htmli peale
    // v6tame k6ik esemed mis on ostukorvi lisatud
    console.log("cart componendis");
  }

}

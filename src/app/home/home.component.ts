import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  esemed = [1,2,3];

  pealkirjad = ["ese1", "ese2", "ese4"];

  objekt = {price: 150, title: "sss111"}

  objektiMassiiv= [
    {price: 1, title: "jalatsid"},
    {price: 2, title: "kindad"},
    {price: 3, title: "joped"},
    {price: 4, title: "mutsid"},
    
  ]
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log("home componendis");
  }

  lisaOstukorvi(item: any) {
    console.log("item");
    console.log("working");
    console.log(this.objektiMassiiv);
    // siin lisame Service-sse kus hoitakse ostukorvi esemeid
    
    this.cartService.cartItemsInService.push(item);
   
  }

}

// Siia teem ostukorvist kustutamise 
//  ja ostukorvi tyhjendamise =[];

// Ostukorvi kogusumma arvutus
// JavaScript forEach() funktsiooni
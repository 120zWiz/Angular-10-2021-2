import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // teisip. teeme 4 uut componenti admin kausta
  // *eseme jaoks
  // *eseme muutmise jaoks
  // *eseme listi jaoks kust saab ka kustutada (kustuta nupu alusel)
  // *Admin menyy paneel

  // k6igile route'd app-routingusse

  // admin menyy paneelis saab k6igile peale liikuda (lisada,vaadata,muuta)
  // Uus Service, kuhu lisan need esemed mis on Home-s (enam ei hoia Home-s
  // esemete listi vaid t6stan item.Service-sse)

  // 
  esemed = [1,2,3];

  pealkirjad = ["ese1", "ese2", "ese4"];

  objekt = {price: 150, title: "sss111"}

  objektiMassiiv= [
    {price: 150, title: "jalatsid"},
    {price: 20, title: "kindad"},
    {price: 300, title: "joped"},
    {price: 14, title: "mutsid"},
    
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
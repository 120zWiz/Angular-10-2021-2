import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { CartService } from '../services/cart.service';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [
    {url: `https://picsum.photos/id/700/900/500`, header: "h1", text: "t1", alt: "a1"},
    {url: `https://picsum.photos/id/700/900/500`, header: "h2", text: "t2", alt: "a2"},
    {url: `https://picsum.photos/id/700/900/500`, header: "h3", text: "t3", alt: "a3"},
    {url: `https://picsum.photos/id/700/900/500`, header: "h4", text: "t4", alt: "a4"}
  ]
  // images = [23,45.33].map((n) => `https://picsum.photos/id/${n}/900/500`);
  // teisip. teeme 4 uut componenti admin kausta
  // *eseme jaoks
  // *eseme muutmise jaoks
  // *eseme listi jaoks kust saab ka kustutada (kustuta nupu alusel)
  // *Admin menyy paneel

  // k6igile route'd app-routingusse

  // admin menyy paneelis saab k6igile peale liikuda (lisada,vaadata,muuta)
  // Uus Service, kuhu lisan need esemed mis on Home-s (enam ei hoia Home-s
  // esemete listi vaid t6stan item.Service-sse)

  // Esemete listi valjakuvama-
  // 1) Constructoris yhendus
  // 2) panna ylemisse muutujasse this. abil Service-i seest vaartused
  // 3)ngFor-iga need valja kuvada

  // 4)Tee HTML-is kustutamiseks nupp igayhele ngFor sisse (click) abil
  // 5)Kustuta tapselt samamoodi nagu tegime Cartis
  esemed = [1,2,3];

  pealkirjad = ["ese1", "ese2", "ese4"];

  objekt = {price: 150, title: "sss111"}

  // date = new Date();
  // hind = 500.99;
  // protsent = 0.78;
  // lause = "Tere tulemast";
  // nimi = "reimo morozov";

  items: Item[] = [];
  sortTitleAsc = true;
  sortPriceAsc = true;
  wordCount = 4;
  constructor(private cartService: CartService, 
    private itemService:ItemService) { }

  ngOnInit(): void {
    console.log("home componendis");
    // this.items = this.itemService.itemsInService;(kood ilma andmebaasita)
    this.itemService.getItemsFromDatabase().subscribe(itemsFromDb =>{
      this.items = itemsFromDb;
      this.itemService.updateItems(itemsFromDb);
    })
  }

  // onSearch() {
  //   this.items.forEach((item,i) => {
  //     let itemDiv = document.getElementsByClassName("item")[i] as HTMLElement;
  //     if (item.title.toString().toLowerCase().indexOf(this.searchedItem.toLowerCase()) > -1 ||
  //     item.id.toString().indexOf(this.searchedItem) > -1 ) {
  //       itemDiv.style.display = "";
  //     } else {
  //       itemDiv.style.display = "none";
  //     }  
  //   });
  // }

  onAddToCart(item: Item) {
    // siin lisame Service-sse kus hoitakse ostukorvi esemeid
    let cartIndex = this.cartService.cartItemsInService.findIndex(cartItem => cartItem.cartItem.id == item.id)
    if (cartIndex > -1) {
      this.cartService.cartItemsInService[cartIndex].quantity++;

    } else {

    this.cartService.cartItemsInService.push({cartItem: item, quantity: 1});
    }
    this.cartService.cartChanged.next();
   
  }

  onSortByTitle() {
    if (this.sortTitleAsc){
      this.items.sort((currentItem, nextItem)=> currentItem.title.localeCompare(nextItem.title));
      this.sortTitleAsc = false;
    } else {
      this.items.sort((currentItem, nextItem)=> nextItem.title.localeCompare(currentItem.title));
      this.sortTitleAsc = true;
    }
  }

  onSortByPrice() {
    if (this.sortPriceAsc){
      this.items.sort((currentItem, nextItem)=> currentItem.price - nextItem.price);
      this.sortPriceAsc = false;
    } else { 
      this.items.sort((currentItem, nextItem)=> nextItem.price - currentItem.price);
      this.sortPriceAsc = true;
    }
  } 
}

// Siia teem ostukorvist kustutamise 
//  ja ostukorvi tyhjendamise =[];

// Ostukorvi kogusumma arvutus
// JavaScript forEach() funktsiooni
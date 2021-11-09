import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
item!: Item;

  constructor(private route: ActivatedRoute,
    private itemService: ItemService) { }

  ngOnInit(): void {
     // vasak pool võtan vastu väärtuse
    // miks let?
    // kõik muutujad mis on klassi üleval, neid kuvan HTML-s
    // let == lokaalne muutuja
    // lokaalne muutuja eksisteerib oma piiride sees
    // .ts failis oma funktsiooni sees
    // .html failis oma tag sees
    //              paremal pool annan väärtuse
    //              1. pöördub selle klassi (this)
    //              2. route poole (Service mis asub constructoris)
    //              3. teeb pildi (snapshot) - Angular toonitab
 //              3. teeb pildi (snapshot) - Angular toonitab, et hilisemaid URL muutusi arvesse ei võeta
    //              4. võtan URL parameetrite võti-väärtus paarid (paramMap abil)
    //              5. võti-väärtus paaridest võtan võtme "esemeId", mis peab olema sama mis app-routingus
    let id = Number(this.route.snapshot.paramMap.get("itemId"));
    console.log(id);

    // let id = 3;
    //   [{hind:251,id:"1"},{hind: 150,id:"2"},{hind:200,id:"3"},{hind:300,id:"3"}].find();
 // this.cartItems.find({hind:251,id:"1"} => 1 == 3 ) false - ei ole see toode mida otsin
// this.cartItems.find({hind: 150,id:"2"} => 2 == 3 ) false - ei ole see toode mida otsin
// this.cartItems.find({hind:200,id:"3"} => 3 == 3 ) true - on õige toode, .find() lõppeb
// this.cartItems.find({hind:300,id:"3"} =>    ) SIIA ENAM EI JÕUA
                    // {hind:200,id:"3"}
// this.item = {hind:200,id:"3"}

    let itemFound = this.itemService.itemsInService.find(item => item.id == id);
    if (itemFound) {
      this.item = itemFound;
    }
    console.log(this.item);
  }

}

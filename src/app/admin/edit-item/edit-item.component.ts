import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  item: any;
  editItemForm: any;
  // app-routingus lisa kooloni järgi muutuja (nagu toode/:esemeId)
  // mine view-items.html failis routerLink edit-item ja lisa sinna ID
        // nagu home.html-s routerLink="toode/{{toode.id}}"
        
  // tehke siia ühendus ActivatedRoute klassiga
  // tehke ühendus ka ItemService klassiga

  constructor(private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("itemId");
      // siin tehke URL-st pilt ja võtke URL parameeter ning pange let muutujasse
    // ! console.log , et id saadi kätte
    // .find() abil leidke õige toode ItemService seest
    console.log(id)
    
    
    this.item = this.itemService.itemsInService.find(item => item.id == id);
    console.log(this.item);
    
    this.editItemForm = new FormGroup ({
      id: new FormControl(this.item.id),
      title: new FormControl(this.item.title),
      price: new FormControl(this.item.price),
      category: new FormControl(this.item.category),
      imgSrc: new FormControl(this.item.imgSrc),
      isActive: new FormControl(this.item.isActive),
      
    })
  }

  onSubmit(form: any) {
    console.log(form);
    let j2rjekorraNumber = this.itemService.itemsInService.findIndex(toode => toode.id == form.value.id);
    console.log(j2rjekorraNumber);
    this.itemService.itemsInService[j2rjekorraNumber] = form.value;
  }

}

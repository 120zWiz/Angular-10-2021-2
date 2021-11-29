import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { CategoryService } from 'src/app/services/category.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  item!: Item;
  editItemForm!: FormGroup;
  categories: string[] = []
  // app-routingus lisa kooloni järgi muutuja (nagu toode/:esemeId)
  // mine view-items.html failis routerLink edit-item ja lisa sinna ID
        // nagu home.html-s routerLink="toode/{{toode.id}}"
        
  // tehke siia ühendus ActivatedRoute klassiga
  // tehke ühendus ka ItemService klassiga

  constructor(private itemService: ItemService, 
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router) { }

  ngOnInit(): void {
    this.itemService.getItemsFromDatabase().subscribe(itemsFromDb =>{
    this.itemService.updateItems(itemsFromDb);
    

    let itemId = Number(this.route.snapshot.paramMap.get("itemId"));
    this.categories = this.categoryService.categoriesInService;
   
    
    
    let itemFound = this.itemService.findItem(itemId);
    if (itemFound) {
    this.item = itemFound;
    }
  
    console.log(this.item);
    
    // values, valid, invalid, controls, touched, untouched
    this.editItemForm = new FormGroup ({
      id: new FormControl(this.item.id),
      title: new FormControl(this.item.title),
      price: new FormControl(this.item.price),
      category: new FormControl(this.item.category),
      imgSrc: new FormControl(this.item.imgSrc),
      isActive: new FormControl(this.item.isActive),
      
    })
  })
  }

  onSubmit() {
     if (this.editItemForm.valid) {
     this.itemService.editItem(this.item, this.editItemForm.value);
     this.itemService.addItemsToDatabase().subscribe(()=>{
      this.router.navigateByUrl("/admin/esemed");
     });
    }
  }

}

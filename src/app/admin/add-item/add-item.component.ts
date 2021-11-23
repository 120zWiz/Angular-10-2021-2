import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from 'src/app/models/item.model';
import { CategoryService } from 'src/app/services/category.service';
import { ItemService } from 'src/app/services/item.service';



@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  categories: String [] = []

  constructor(private itemService: ItemService, 
    private categoryService: CategoryService ) { }

  ngOnInit(): void {
    this.categories = this.categoryService.categoriesInService;
    this.itemService.getItemsFromDatabase().subscribe(itemsFromDb =>{ 
      this.itemService.itemsInService = itemsFromDb;
    })
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form);
      console.log(form.value);
      this.itemService.itemsInService.push(form.value);
      this.itemService.addItemsToDatabase().subscribe();
    }
    console.log("nuppu vajutati")
  }

}

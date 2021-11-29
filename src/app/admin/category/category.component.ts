import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: string [] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    // this.categories = this.categoryService.categoriesInService;
    this.categoryService.getCategorysFromDatabase().subscribe(catFromDb =>{
      if (catFromDb) {
        this.categories = catFromDb;
        this.categoryService.categoriesInService = catFromDb;
      }
    })
  }

  onDeleteCategory(category: string) {
    let index = this.categoryService.categoriesInService.indexOf(category);
    console.log(index)
    this.categoryService.categoriesInService.splice(index,1);
  }

  onSubmit(form: NgForm) {
    console.log(form)
    if (form.valid) {
    this.categoryService.categoriesInService.push(form.value.category);
    // this.categories.push(form.value.category);
    this.categoryService.addCategorysToDatabase().subscribe();
    }
  }

  onAddCaegorysToDatabase() {
    this.categoryService.addCategorysToDatabase().subscribe();
  } 
  
}

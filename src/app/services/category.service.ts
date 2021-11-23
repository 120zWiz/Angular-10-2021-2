import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoriesInService = [ 'Running', 'Outdoors', 'Sneakers'];

  constructor(private http: HttpClient) { }

  addCategorysToDatabase() {
    return this.http.put("https://webshop-2e30e-default-rtdb.europe-west1.firebasedatabase.app/categorys.json", this.categoriesInService);
  }

  getCategorysFromDatabase() {
    return this.http.get<string[]>
    ("https://webshop-2e30e-default-rtdb.europe-west1.firebasedatabase.app/items.json");
  }
}

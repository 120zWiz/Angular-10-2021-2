import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoriesInService = [ 'Running', 'Outdoors', 'Sneakers'];

  constructor() { }
}

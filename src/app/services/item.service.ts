import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsInService: any[] = [
    {price: 150, title: "jalatsid"},
    {price: 20, title: "kindad"},
    {price: 300, title: "joped"},
    {price: 14, title: "mutsid"},
  ];

  constructor() { }
}

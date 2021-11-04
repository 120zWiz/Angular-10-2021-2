import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './admin/add-item/add-item.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CategoryComponent } from './admin/category/category.component';
import { EditItemComponent } from './admin/edit-item/edit-item.component';
import { ViewItemsComponent } from './admin/view-items/view-items.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './home/view/view.component';

const routes: Routes = [
  // URL path brauseris:"localhost:4200", HomeComponent sisu koos HTML-ga,
                                          // mida näidatakse kasutajale
                                          // CSS-ga kujundatakse
                                          // .ts failiga lisatakse dünaamilisust
  { path: "", component: HomeComponent },
  // kui on brauseris "localhost:4200", siis näitab cart.component.html-i ja lisasid
  { path: "ostukorv", component: CartComponent },
  { path: "admin", component: AdminHomeComponent },
  { path: "admin/kategooriad", component: CategoryComponent },
  { path: "admin/lisa-ese", component: AddItemComponent },
  { path: "admin/esemed", component: ViewItemsComponent },
  { path: "admin/muuda-ese/:itemId", component: EditItemComponent },
  { path: "toode/:itemId", component: ViewComponent },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

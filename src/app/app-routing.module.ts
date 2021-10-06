import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // URL path brauseris:"localhost:4200", HomeComponent sisu koos HTML-ga,
                                          // mida näidatakse kasutajale
                                          // CSS-ga kujundatakse
                                          // .ts failiga lisatakse dünaamilisust
  { path: "", component: HomeComponent },
  // kui on brauseris "localhost:4200", siis näitab cart.component.html-i ja lisasid
  { path: "ostukorv", component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

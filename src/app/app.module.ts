import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AddItemComponent } from './admin/add-item/add-item.component';
import { EditItemComponent } from './admin/edit-item/edit-item.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ViewItemsComponent } from './admin/view-items/view-items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewComponent } from './home/view/view.component';
import { CategoryComponent } from './admin/category/category.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ItemPricePipe } from './pipes/item-price.pipe';
import { ShortenTitlePipe } from './pipes/shorten-title.pipe';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './admin/carousel/carousel.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    AddItemComponent,
    EditItemComponent,
    AdminHomeComponent,
    ViewItemsComponent,
    NavbarComponent,
    ViewComponent,
    CategoryComponent,
    ItemPricePipe,
    ShortenTitlePipe,
    LoginComponent,
    SignupComponent,
    CarouselComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
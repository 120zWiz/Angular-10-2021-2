import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../auth/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sumOfCart = 0;
  isLoggedIn = false;

  constructor(private translate: TranslateService,
    private cartService: CartService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = sessionStorage.getItem("userData") != null;
    this.authService.loggedInChanged.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
    console.log("ostukorvi kogusumma")
    this.cartService.cartChanged.subscribe(() => {
      this.sumOfCart = 0;
      this.cartService.cartItemsInService.forEach(cartItem =>
         this.sumOfCart = this.sumOfCart + cartItem.price); 
    });
    let language = localStorage.getItem("language");
    if (language) {
      this.translate.use(language);
    }
  }

  onLogout() {
    this.authService.logout();
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem("language",language)
}

}

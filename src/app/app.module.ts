import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { StarRatingModule } from 'angular-star-rating';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginPageComponent } from './login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    CartPageComponent,
    FoodpageComponent,
    NotfoundComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StarRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

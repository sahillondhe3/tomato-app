import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'search/:searchItem',
    component: HomeComponent
  },
  {
    path: 'cart-page', component: CartPageComponent
  },
  {
    path: 'food/:id', component: FoodpageComponent
  },
  {
    path: 'cart-page', component: CartPageComponent
  },
  {
    path:'login-page',component: LoginPageComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

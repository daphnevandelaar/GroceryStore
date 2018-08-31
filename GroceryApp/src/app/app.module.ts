import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { OrderComponent } from './components/order/order.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { ProducttableComponent } from './components/producttable/producttable.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    OrderComponent,
    ShoppingcartComponent,
    ProducttableComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

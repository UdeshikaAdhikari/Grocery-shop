import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponet } from './User/home/home.component';
import { LoginComponent } from './User/login/login.component';

import { ProductComponent } from './User/product/product.component';
import { HeaderComponent } from './User/header/header.component';
import { FooterComponent } from './User/./footer/footer.component';
import { ContactComponent } from './User/contact/contact.component';
import { CartComponent } from './User/cart/cart.component';
import { UserMainComponent } from './User/user-main/user-main.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponet,
    LoginComponent,
    
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    CartComponent,
    UserMainComponent,
     
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
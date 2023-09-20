import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponet } from './User/home/home.component';
import { LoginComponent } from './User/login/login.component';
import { ProductComponent } from './User/product/product.component';
import {ContactComponent } from './User/contact/contact.component';
import {CartComponent} from './User/cart/cart.component';


const routes: Routes = [
  {path:'home', component:HomeComponet},
  {path:'login', component:LoginComponent},
  {path:'search/:searchTerm', component:HomeComponet},
  {path:'product1', component:ProductComponent},
  {path:'Contact', component:ContactComponent},
  {path:'cart', component:CartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

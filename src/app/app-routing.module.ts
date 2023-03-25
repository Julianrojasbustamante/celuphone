import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./client-view/home/home.component";
import {CatalogueComponent} from "./client-view/catalogue/catalogue.component";
import {AboutPageComponent} from "./client-view/about-page/about-page.component";
import {ProductComponent} from "./client-view/product/product.component";
import {RegisterComponent} from "./core/register/register.component";
import {ShopingCartComponent} from "./client-view/shoping-cart/shoping-cart.component";
import {ProductManagementComponent} from "./admin/product-management/product-management.component";

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'inicio', component: HomeComponent},
  {path: '#', component: HomeComponent},
  {path: 'catalogo', component: CatalogueComponent},
  {path: 'catalogo/:categoria', component: CatalogueComponent},
  {path: 'sobre-nosotros', component: AboutPageComponent},
  {path: 'registro', component: RegisterComponent},
  {path: 'producto/:id', component: ProductComponent},
  {path: 'carrito-compras', component: ShopingCartComponent},
  {path: 'admin', component: ProductManagementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

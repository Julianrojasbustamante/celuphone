import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./client-view/home/home.component";
import {CatalogueComponent} from "./client-view/catalogue/catalogue.component";
import {AboutPageComponent} from "./client-view/about-page/about-page.component";

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'inicio', component: HomeComponent},
  {path: '#', component: HomeComponent},
  {path: 'catalogo', component: CatalogueComponent},
  {path: 'catalogo/:categoria', component: CatalogueComponent},
  {path: 'sobre-nosotros', component: AboutPageComponent},
  {path: 'detalle-producto/:id', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

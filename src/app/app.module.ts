import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreComponent } from './core/core.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { HomeComponent } from './client-view/home/home.component';
import { CatalogueComponent } from './client-view/catalogue/catalogue.component';
import { AboutPageComponent } from './client-view/about-page/about-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductComponent } from './client-view/product/product.component';
import { RegisterComponent } from './core/register/register.component';
import {FormsModule} from "@angular/forms";
import {DataServices} from "./services/data.services";
import { HttpClientModule } from "@angular/common/http";
import { ShopingCartComponent } from './client-view/shoping-cart/shoping-cart.component';
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    HeaderComponent,
    FooterComponent,
    ClientViewComponent,
    HomeComponent,
    CatalogueComponent,
    AboutPageComponent,
    ProductComponent,
    RegisterComponent,
    ShopingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
  ],
  providers: [DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }

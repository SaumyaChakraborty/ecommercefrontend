import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonmoduleModule } from './commonmodule/commonmodule.module';
import { HomeComponent } from './template/home/home.component';
import { AboutComponent } from './template/about/about.component';
import { ContactComponent } from './template/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrendingProductsComponent } from './components/trending-products/trending-products.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TrendingProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonmoduleModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

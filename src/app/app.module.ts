import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ // всі компоненти які модуль використовує
    AppComponent
  ],
  imports: [
    BrowserModule, // всі ліби, BrowModule (if, else, switch і тп)
    AppRoutingModule,
    FormsModule
  ],
  providers: [], // service - Для роботи з бекендом
  bootstrap: [AppComponent] // що ми в першу чергу запускаєм
})
export class AppModule { }

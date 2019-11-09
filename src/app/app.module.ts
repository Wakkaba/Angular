import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CurrencyConverterPipe } from './pipes/currency-converter.pipe';
import { UserRegistrationComponentComponent } from './components/user-registration-component/user-registration-component.component';
import { UserAuthComponentComponent } from './components/user-auth-component/user-auth-component.component';
import { HouseRegistrationComponentComponent } from './components/house-registration-component/house-registration-component.component';
import { HouseComponentComponent } from './components/house-component/house-component.component';
import { UserComponentComponent } from './components/user-component/user-component.component';



@NgModule({
  declarations: [ // всі компоненти які модуль використовує
    AppComponent,
    CurrencyConverterPipe,
    UserRegistrationComponentComponent,
    UserAuthComponentComponent,
    HouseRegistrationComponentComponent,
    HouseComponentComponent,
    UserComponentComponent,
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

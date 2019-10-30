import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  statusLogin: boolean;
  statusRegister: boolean;
  inputedSearchResult = '';

  houses = [
    {
      city: 'Lviv',
      street: 'Franka str.',
      rooms: 3
    },
    {
      city: 'Dnipro',
      street: 'Dnipryanska str.',
      rooms: 2
    },
    {
      city: 'Kyiv',
      street: 'Naukova str.',
      rooms: 3
    }
  ];

  showSearchResult(result) {
    this.inputedSearchResult = result;
    console.log('Results!');
  }
  loginUser() {
    this.statusLogin = !this.statusLogin;
    this.statusRegister = false;
  }
   registerUser() {
     this.statusRegister = !this.statusRegister;
     this.statusLogin = false;
   }
}

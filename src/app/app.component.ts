import { Component } from '@angular/core';
import { IhouseModel, IuserModel } from './models';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  statusLogin: boolean;
  statusRegister: boolean;
  houseRegister: boolean;
  // inputedSearchResult = '';

  logMessage: string;


  addUser: IuserModel = {
    name: '',
    email: '',
    password: '',
    is_blocked: Boolean(Math.random() * 50)
  };

  authUser = {
    email: '',
    password: ''
  };

  users: IuserModel[] = [
    {
      name: 'Artem',
      email: 'art@mail.com',
      password: 'aaart12345',
      is_blocked: false
    },
    {
      name: 'Olya',
      email: 'lol@mail.com',
      password: 'lol12346542',
      is_blocked: true
    }
  ];

  houses: IhouseModel[] = [
    {
      id: 1,
      city: 'Lviv',
      street: 'Franka str.',
      price: 30000,
      owner: this.users[0]
    },
    {
      id: 2,
      city: 'Dnipro',
      street: 'Dnipryanska str.',
      price: 40000,
      owner: this.users[1]
    }
  ];

  addHouse: IhouseModel = {
    id: 0,
    city: '',
    street: '',
    price: undefined,
    owner: this.users[Math.floor(Math.random() * this.users.length)]

  };

  // showSearchResult(result) {
  //   this.inputedSearchResult = result;
  //   console.log('Results!');
  // }
  loginUserForm() {
    this.statusLogin = !this.statusLogin;
    this.statusRegister = false;
  }
   registerUser() {
     this.statusRegister = !this.statusRegister;
     this.statusLogin = false;
   }
   newHouse() {
    this.houseRegister = !this.houseRegister;
   }
   createNewUser() {
     this.users.push(this.addUser);
   }
   loginUser() {
    const checkAuth = this.users.find(user => this.authUser.email === user.email &&
    this.authUser.password === user.password);
    checkAuth ?
    this.logMessage = 'Oh, it`s you again...Come in!' :
    this.logMessage = 'Never seen you before, wanna register?';
    console.log(this.logMessage);
  }
  createNewHouse() {
    this.houses.push(this.addHouse);
  }
}

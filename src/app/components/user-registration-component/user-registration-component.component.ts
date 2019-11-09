import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IuserModel} from '../../models';

@Component({
  selector: 'app-user-registration-component',
  templateUrl: './user-registration-component.component.html',
  styleUrls: ['./user-registration-component.component.css']
})
export class UserRegistrationComponentComponent {

  constructor() {}
  @Input() addUser;
  @Output() newUser = new EventEmitter();

  createNewUser() {
    this.newUser.emit(this.addUser);
  }
}

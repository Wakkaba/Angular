import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-user-auth-component',
  templateUrl: './user-auth-component.component.html',
  styleUrls: ['./user-auth-component.component.css']
})
export class UserAuthComponentComponent {
  private logMessage: string;

  constructor() {
  }

  @Input() authUser;
  @Output() logUser = new EventEmitter();

  loginUser() {
    this.logUser.emit(this.authUser);
  }
}

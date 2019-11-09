import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-house-registration-component',
  templateUrl: './house-registration-component.component.html',
  styleUrls: ['./house-registration-component.component.css']
})
export class HouseRegistrationComponentComponent {

  constructor() { }

  @Input() addHouse;
  @Output() addNewHouse = new EventEmitter();

  createNewHouse() {
    this.addNewHouse.emit(this.addNewHouse);
  }
}

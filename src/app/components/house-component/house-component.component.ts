import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-house-component',
  templateUrl: './house-component.component.html',
  styleUrls: ['./house-component.component.css']
})
export class HouseComponentComponent {
  showInfoUsers: boolean;
  ShowOneUserInfo: number;
  constructor() { }
  @Input() house;
  showInfo(id: number) {
    this.showInfoUsers = !this.showInfoUsers;

    this.ShowOneUserInfo = id;
  }

}

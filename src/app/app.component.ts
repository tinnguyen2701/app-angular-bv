import { Component, VERSION } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  constructor(public userService: UserService) {}

  toggleRole() {
    this.userService.currentUser.isAdmin = !this.userService.currentUser.isAdmin;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
    <h3>Admin Layout</h3>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

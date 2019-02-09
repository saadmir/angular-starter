import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  showMenu = false;

  constructor() {}

  ngOnInit() {
    console.log('[dashboard.component]', 'ngOnInit');
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}

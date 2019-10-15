import { Component, OnInit } from '@angular/core';
import { map, flatMap } from 'rxjs/operators';

import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  showMenu = false;

  constructor(private restService: RestService){
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  ngOnInit() {
    this.restService.doGet('users/').subscribe((res) => {
      console.log('res', res);
    });

  }
}

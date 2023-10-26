import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public navStyle: any;

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if(event instanceof NavigationStart) {
        this.navStyle = { 'background-color': event.url === '/' ? 'white' : 'black', 'color': event.url === '/' ? 'black' : 'white' };
      }
    });
  }
}

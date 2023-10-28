import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public navStyle!: { 'background-color': string; 'color': string; };

  constructor(private _router: Router) {
    _router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // invert nav bar color based for home vs. other
        this.navStyle = {
          'background-color': event.url === '/' ? 'white' : 'black',
          'color': event.url === '/' ? 'black' : 'white'
        };
      }
    });
  }
}

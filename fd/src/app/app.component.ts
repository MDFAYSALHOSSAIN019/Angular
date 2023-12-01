import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  // template: "<app-store></app-store>",
  template: "<router-outlet></router-outlet>",
  
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sportsApplication';
}

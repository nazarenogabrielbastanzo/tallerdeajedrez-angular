import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // https://stackoverflow.com/questions/48048299/angular-5-scroll-to-top-on-every-route-click/48048822
  onActivate(event: any) {
    window.scroll(0, 0);
  }

}

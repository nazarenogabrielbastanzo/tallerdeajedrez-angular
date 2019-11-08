import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onActivate(event: any) {
    window.scroll(0, 0);
    // or document.body.scrollTop = 0;
    // or document.querySelector('body').scrollTo(0,0)
    // https://stackoverflow.com/questions/48048299/angular-5-scroll-to-top-on-every-route-click/48048822
  }

  // ¡ PUEDE SERVIR PARA HACER SCROLL-TOP CON UN BUTTON !
  /* onActivate(event: any) {
    const scrollToTop = window.setInterval(() => {
        const pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 16);
  } */

}

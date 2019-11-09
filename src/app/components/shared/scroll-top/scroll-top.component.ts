import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css']
})
export class ScrollTopComponent implements OnInit {

  didScroll: boolean;

  constructor() {
    this.didScroll = false;
  }

  ngOnInit() {
  }

  // https://stackoverflow.com/questions/48048299/angular-5-scroll-to-top-on-every-route-click/48048822
  scrollTop(event: any) {
    const scrollToTop = window.setInterval(() => {
        const pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 10);
  }

  // https://stackoverflow.com/questions/41304968/how-to-get-on-scroll-events
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (event.path[1].scrollY > 0) {
      this.didScroll = true;
    } else {
      this.didScroll = false;
    }
    /* console.log(event.path[1].scrollY); */
  }

}

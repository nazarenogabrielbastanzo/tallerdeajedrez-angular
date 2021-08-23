import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {
  screenHeight: number = 0;
  screenWidth: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
     this.screenHeight = window.innerHeight;
     this.screenWidth = window.innerWidth;
    //  console.log(this.screenWidth, this.screenHeight);

  }

}

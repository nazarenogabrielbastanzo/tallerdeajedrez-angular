import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  color = false;
  nro: number;
  movil = false;
  posts: any;

  constructor(
    private router: Router,
    private peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    if (window.screen.width < 1024) {
      this.movil = true;
    } else {
      this.movil = false;
    }

    this.peticionesService.getPosts()
      .subscribe((posts: any) => {
        this.posts = posts;
      });
  }

  irAlLink( link: any[] ) {
    this.router.navigate(link);
  }

  scrollDown() {
    window.scrollTo({
      top: window.scrollY + 600,
      behavior: 'smooth'
    });
  }

}

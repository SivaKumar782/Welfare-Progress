import { Component, OnInit, HostListener, NgModule } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  navbarOpen = false;
  logoSrc = "../"


  ngOnInit() {

    }

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }

  ScrollIntoView(elem: any) {
    console.log(elem);
    document.querySelector(elem).scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  isScrolled = false;

  @HostListener('window:scroll')
  scrollEvent() {
    window.pageYOffset >= 80
      ? (this.isScrolled = true)
      : (this.isScrolled = false);
  }

 

}

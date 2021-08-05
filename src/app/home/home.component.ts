import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
// import * as $ from 'jquery';
declare var $: any;
// import 'bootstrap';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'welfare-progress';
    panelOpenState = false;

    openTab = 1;
    toggleTabs($tabNumber: number) {
        this.openTab = $tabNumber;
    }
    constructor() {

    }

    ngOnInit() {

      
      $('[data-toggle="tooltip"]').tooltip()

      // (<any>$('[data-toggle="tooltip"]')).tooltip();
      


    }



    customOptions: OwlOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: false,
        pullDrag: false,
        dots: true,
        dotsData: true,
        autoplay: false,
        autoplaySpeed: 1000,
        navSpeed: 700,
        navText: ['<i class="material-icons">chevron_left</i>','<i class="material-icons">chevron_right</i>'],
        responsive: {
          0: {
            items: 1
          },
          400: {
            items: 1
          },
          740: {
            items: 1
          },
          940: {
            items: 1
          }
        },
        nav: true
      }


      periods = [
        {value: '2021', viewValue: '2021'},
        {value: '2020', viewValue: '2020'},
        {value: '2019', viewValue: '2019'},
        {value: '2018', viewValue: '2018'},
        {value: '2017', viewValue: '2017'},
        {value: '2016', viewValue: '2016'},
        {value: '2015', viewValue: '2015'},
        {value: '2014', viewValue: '2014'},
        {value: '2013/14', viewValue: '2013/14'},
        {value: '2012/13', viewValue: '2012/13'},
        {value: '2013/12', viewValue: '2011/12'},
        {value: '2010/11', viewValue: '2010/11'},

        
      ];

}

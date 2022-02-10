import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {Router} from '@angular/router';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

// import * as $ from 'jquery';
declare var $: any;
// import 'bootstrap';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = [


    'ACCOR',

'CMR SAB DE CV',

'COMPANIA ARGENTINA DE JUGOS',

'Crepes & Waffles',

'Grupo Restaurantero Gigante',

'Huevos Guillén',

'Procafecol S.A.',

'PT Sari Pizza Indonesia',

'Qbano',

'SaladStop! Pte Ltd.',

'Vapiano Colombia',

'Wyndham Destinations'


    
  ];
  
  filteredOptions: Observable<string[]>;

  title = 'welfare-progress';
    panelOpenState = false;

    openTab = 1;
    selected;
    toggleTabs($tabNumber: number) {
        this.openTab = $tabNumber;
    }
    constructor(private router: Router) {

    }

    ngOnInit() {

      // this.options.sort();

      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value)),
      );

      
      $('[data-toggle="tooltip"]').tooltip()

      // (<any>$('[data-toggle="tooltip"]')).tooltip();
      


    }

    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
  
      return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }


    onSelectionChange(event){
      this.periods = [];
      if(this.selected == 'ACCOR'){
        this.periods.push({"value":"2019","viewValue":"2019"})
      }else if(this.selected == 'CMR SAB DE CV'){
        this.periods.push({"value":"2020","viewValue":"2020"})
      }else if(this.selected == 'COMPANIA ARGENTINA DE JUGOS'){
        this.periods.push({"value":"2021","viewValue":"2021"})
      }else if(this.selected == 'Huevos Guillén'){
        this.periods.push({"value":"2021","viewValue":"2021"})
      }else if(this.selected == 'PT Sari Pizza Indonesia'){
        this.periods.push({"value":"2021","viewValue":"2021"})
      }else if(this.selected == 'SaladStop! Pte Ltd.'){
        this.periods.push({"value":"2021","viewValue":"2021"})
      }else if(this.selected == 'Vapiano Colombia'){
        this.periods.push({"value":"2020","viewValue":"2020"})
      }else if(this.selected == 'Wyndham Destinations'){
        this.periods.push({"value":"2020","viewValue":"2020"})
      }else if(this.selected == 'Qbano'){
        this.periods.push({"value":"2021","viewValue":"2021"})
      }else if(this.selected == 'Crepes & Waffles'){
        this.periods.push({"value":"2021","viewValue":"2021"})
      }else if(this.selected == 'Procafecol S.A.'){
        this.periods.push({"value":"2021","viewValue":"2021"})
      }else if(this.selected == 'Grupo Restaurantero Gigante'){
        this.periods.push({"value":"2021","viewValue":"2021"})
      }
    }


    findreport(){
      if(this.selected == 'ACCOR'){
        window.open(window.location.href+'/assets/wp/reports/ACCOR.pdf', '_blank');
      }else if(this.selected == 'CMR SAB DE CV'){
        window.open(window.location.href+'/assets/wp/reports/CMR SAB DE CV.pdf', '_blank');
      }else if(this.selected == 'COMPANIA ARGENTINA DE JUGOS'){
        window.open(window.location.href+'/assets/wp/reports/COMPANIA ARGENTINA DE JUGOS.pdf', '_blank');
      }else if(this.selected == 'Huevos Guillén'){
        window.open(window.location.href+'/assets/wp/reports/Huevos Guillén.pdf', '_blank');
      }else if(this.selected == 'PT Sari Pizza Indonesia'){
        window.open(window.location.href+'/assets/wp/reports/PT Sari Pizza Indonesia.pdf', '_blank');
      }else if(this.selected == 'SaladStop! Pte Ltd.'){
        window.open(window.location.href+'/assets/wp/reports/Eat wide awake.pdf', '_blank');
      }else if(this.selected == 'Vapiano Colombia'){
        window.open(window.location.href+'/assets/wp/reports/Vapiano Colombia.pdf', '_blank');
      }else if(this.selected == 'Wyndham Destinations'){
        window.open(window.location.href+'/assets/wp/reports/Wyndham Destinations.pdf', '_blank');
      }else if(this.selected == 'Qbano'){
        window.open(window.location.href+'/assets/wp/reports/Qbano.pdf', '_blank');
      }else if(this.selected == 'Crepes & Waffles'){
        window.open(window.location.href+'/assets/wp/reports/Crepes & Waffles.pdf', '_blank');
      }else if(this.selected == 'Procafecol S.A.'){
        window.open(window.location.href+'/assets/wp/reports/Procafecol S.A..pdf', '_blank');
      }else if(this.selected == 'Grupo Restaurantero Gigante'){
        window.open(window.location.href+'/assets/wp/reports/Grupo Restaurantero Gigante.pdf', '_blank');
      }
      else{
        alert('Select a company');
      }
    }


    reports(){
      // this.router.navigateByUrl('/reports');
      window.open('/reports', "_self");
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
        // {value: '2021', viewValue: '2021'},
        // {value: '2020', viewValue: '2020'},
        // {value: '2019', viewValue: '2019'},
        // {value: '2018', viewValue: '2018'},
        // {value: '2017', viewValue: '2017'},
        // {value: '2016', viewValue: '2016'},
        // {value: '2015', viewValue: '2015'},
        // {value: '2014', viewValue: '2014'},
        // {value: '2013/14', viewValue: '2013/14'},
        // {value: '2012/13', viewValue: '2012/13'},
        // {value: '2013/12', viewValue: '2011/12'},
        // {value: '2010/11', viewValue: '2010/11'},

        
      ];

}

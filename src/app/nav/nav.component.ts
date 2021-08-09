import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private authService: AuthService,
    private fb: FormBuilder,
    private http: HttpClient,
  ) { }

  navbarOpen = false;
  logoSrc = "../"
  firstFormGroup: any;
    baseUrl = "https://devapp.welfareprogress.com/api/auth/v1/signinObnes"

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      email: [''],
      password: [''],
    })
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


  signin(){

    this.authService
    .login(this.firstFormGroup.value.email, this.firstFormGroup.value.password)
    .subscribe(
      (res) => {
        console.log(res)
      },
      (err) => {
      console.log(err)
      }
    );
    // console.log(this.firstFormGroup.value)
    // this.http.post(this.baseUrl, this.firstFormGroup.value).subscribe((res)=>{
    //   console.log(res)
    // })
  }





}


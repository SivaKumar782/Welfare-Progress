import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, AbstractControl, Validators, ValidatorFn } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import * as bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loginForm: FormGroup;
  otpForm: FormGroup;
  firstFormGroup: FormGroup;
  loginView: boolean = true
  otpView: boolean = false
  changePassView: boolean = true
  baseUrl = "https://devapp.welfareprogress.com/api/auth/v1/signinObnes"

  navbarOpen = false;
  logoSrc = "../"
  showErr: boolean = false
  errMsg: any

  constructor(public dialog: MatDialog,
    private authService: AuthService,
    private fb: FormBuilder,
    private http: HttpClient,
  ) { }


  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    })

    this.otpForm = this.fb.group({
      otp: ['', Validators.required]
    });

    this.firstFormGroup = this.fb.group({
      password: ['', [Validators.required]],
      newpassword: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]],
    }, { validator: this.passwordConfirming });
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


  signin() {

    this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        (res) => {
          if (res) {
            this.errMsg = 'Enter OTP sent to your Email ID'
            this.showErr = true
            this.triggerOtp()
            setTimeout(() => {
              this.showErr = false
              this.errMsg = ''
            }, 3000);

          } else {
            this.errMsg = 'Invalid login'
            this.showErr = true
            setTimeout(() => {
              this.showErr = false
              this.errMsg = ''
            }, 3000);
          }
        },
        (err) => {

          this.errMsg = err.error.message
          this.showErr = true
          setTimeout(() => {
            this.showErr = false
            this.errMsg = ''
          }, 3000);
        }
      );
    // console.log(this.firstFormGroup.value)
    // this.http.post(this.baseUrl, this.firstFormGroup.value).subscribe((res)=>{
    //   console.log(res)
    // })
  }

  checktwofa(){
    this.authService.checkOtp(this.loginForm.value.email, this.otpForm.value.otp).subscribe(res => {
      console.log('res', res)

      //two types of res 'Matched' means the OTP matches, or 'Try Again'
      if (res['message'] == 'Matched') {

        this.errMsg = 'Redirecting...'
        this.showErr = true
        setTimeout(() => {
          this.showErr = false
          this.errMsg = ''
        }, 3000);
      } else {
        this.errMsg = 'Try agian'
        this.showErr = true
        setTimeout(() => {
          this.showErr = false
          this.errMsg = ''
        }, 3000);
        // this.otperror = true
      }
    })
  }

  triggerOtp() {
    this.authService.triggerOtp(this.loginForm.value.email).subscribe(res => {
      console.log('res', res)
    })
  }

  //validation to compare both passwords
  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('newpassword').value !== c.get('confirmpassword').value) {
      return { invalid: true };
    }
  }

  forgotPass(){
    console.log("forgot password flow")
  }


  // updaterecordpassword(): void {

  //   //password hash whihc gets stored in DB
  //   const passworddata = {
  //     password: bcrypt.hashSync(this.firstFormGroup.value.newpassword, 10),
  //     pass_changed: 1,
  //     pass_updatedon: this.datePipe.transform(this.passupdatedon, 'yyyy-MM-dd')
  //   };

  //   this.userservice.updatePassword(this.loginForm.value.email, passworddata)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.passwordmessage = 'Password successfully changed';

  //       },
  //       error => {
  //         console.log(error);
  //       });

  //   //new password is submitted and now users has to login again
  //   setTimeout(() => {
  //     this.forgotPass = false
  //     this.loginWindow = true
  //     this.otpWindow = false
  //     this.newPassWindow = false
  //   }, 3000);  //5s

  // }

}


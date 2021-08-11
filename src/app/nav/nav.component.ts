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
  passupdatedon: Date = new Date();

  loginView: boolean = true
  otpView: boolean = false
  changePassView: boolean = false
  forgotPassFlow: boolean = false
  accessToken
  uid
  // baseUrl = "http://localhost:3000/api/auth/v1/signinObnes"

  navbarOpen = false;
  logoSrc = "../"
  showErr: boolean = false
  errMsg: any

  constructor(public dialog: MatDialog,
    private authService: AuthService,
    private fb: FormBuilder,
    public datePipe: DatePipe,

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
      // password: ['', [Validators.required]],
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
            this.accessToken = res.accessToken
            this.uid = res.uid
            console.log(res)
            console.log(this.accessToken)
            this.errMsg = 'Enter OTP sent to your Email ID'
            this.showErr = true
            this.triggerOtp()
            this.otpView = true
            this.loginView = false
            this.changePassView = false
            setTimeout(() => {
              this.showErr = false
              this.errMsg = ''
            }, 5000);

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

  checkTwoFa() {
    this.authService.checkOtp(this.loginForm.value.email, this.otpForm.value.otp).subscribe(res => {
      console.log('res', res)

      //two types of res 'Matched' means the OTP matches, or 'Try Again'
      if (res['message'] == 'Matched') {

        if (this.forgotPassFlow == true) {
          this.changePassView = true
          this.otpView = false
          this.loginView = false
        } else if (this.forgotPassFlow == false) {
           console.log(this.accessToken)
          const redirectUrl = `http://localhost:49934/#/authentication/signin?uid=` + this.uid;
          console.log(redirectUrl)
          window.open(redirectUrl, '_blank');
          this.errMsg = 'Redirecting...'
          this.showErr = true
          setTimeout(() => {
            this.showErr = false
            this.errMsg = ''
          }, 3000);


        }


      } else {
        this.errMsg = 'Try again'
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

  forgotPass() {
    // this.forgotPassFlow = true
    console.log("forgot password flow")

    if (this.forgotPassFlow == false) {
      this.otpView = false
      this.changePassView = false
      this.forgotPassFlow = true
    } else {
      this.authService.triggerOtp(this.loginForm.value.email).subscribe(res => {
        console.log('res', res)
      })
      this.otpForm.reset()
      this.errMsg = 'Enter OTP sent to your Email ID'
      this.showErr = true
      setTimeout(() => {
        this.showErr = false
        this.errMsg = ''
      }, 3000);
      this.otpForm.reset()
      this.changePassView = false
      this.loginView = false
      this.otpView = true

    }
  }


  //Resend the OTP
  resendOtp() {
    this.authService.triggerOtp(this.loginForm.value.email).subscribe(res => {
      console.log('res', res)
    })
    this.errMsg = 'OTP has been resend!'
    this.showErr = true
    setTimeout(() => {
      this.showErr = false
      this.errMsg = ''
    }, 3000);
    this.otpForm.reset()
  }


  updaterecordpassword(): void {

    //password hash whihc gets stored in DB
    const passworddata = {
      password: bcrypt.hashSync(this.firstFormGroup.value.newpassword, 10),
      pass_changed: 1,
      pass_updatedon: this.datePipe.transform(this.passupdatedon, 'yyyy-MM-dd')
    };
    console.log(passworddata)
    console.log(this.loginForm.value.email)

    this.authService.updatePassword(this.loginForm.value.email, passworddata)
      .subscribe(
        response => {
          console.log(response);
          this.errMsg = 'Password successfully changed'
          this.showErr = true
          this.loginView = true
          this.otpView = false
          this.changePassView = false
          this.forgotPassFlow = false
          setTimeout(() => {
            this.showErr = false
            this.errMsg = ''
          }, 3000);
        },
        error => {
          console.log(error);
        });

    //new password is submitted and now users has to login again
    setTimeout(() => {
      // this.forgotPass = false
      // this.loginWindow = true
      // this.otpWindow = false
      // this.newPassWindow = false
    }, 3000);  //5s

  }

}


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as bcrypt from 'bcryptjs';
import { DatePipe } from '@angular/common';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  baseUrl = "https://devapp.welfareprogress.com/api" + '/auth/v1';




  login(email: string, password: string): Observable<any> {
    return this.http.post(this.baseUrl + '/signinObnes', {
      email,
      password
    }, httpOptions).pipe(
      map((user) => {
        console.log(JSON.stringify(user))
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        // localStorage.setItem('currentUser', JSON.stringify(user));
        // this.currentUserSubject.next(user);
        return user;
      })
    );
  }


  triggerOtp(email: string): Observable<any> {
    // console.log(comdata);
    return this.http.post(this.baseUrl + '/otpTrigger', {
      email
    });
  }

  checkOtp(email: string, onetimePass: string): Observable<any> {
    // console.log(comdata);
    return this.http.post(this.baseUrl + '/crossCheckOtp', {
      email,
      onetimePass
    });
  }



}

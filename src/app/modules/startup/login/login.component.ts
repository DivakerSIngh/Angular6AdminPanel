import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppserviceService } from '../../../services/appservice.service';
import { Errors } from '../../../modules/shared/error-class';
import * as constants from '../../shared/constant';
import { MatSnackBar } from '@angular/material';
//import { Common } from '../../shared/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [Errors]
})
export class LoginComponent implements OnInit {


  loginResponse: string;
  responseStatus = false;
  responseMessage: string;

  userForm = new FormGroup({

    email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    password: new FormControl('', [Validators.required])

  })
  constructor(private error: Errors,private snackBar:MatSnackBar, private router: Router, private http: AppserviceService) {
    error.errors.validEmail
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 1200
    });
  }
  ngOnInit() {
  }

  login() {
    if (this.userForm.valid) {
      let loginData = {
        email: this.userForm.value.email, password: this.userForm.value.password
      }
      var result = this.http.httpPostLogin(constants.loginUrl, loginData);
      result.subscribe((response) => {
        if (response.code == 200) {
          localStorage.setItem('token', response.authToken);
          localStorage.setItem('name', response.data.name);
          localStorage.setItem('email', response.data.email);
          localStorage.setItem('user-access', JSON.stringify(response.data));
          this.router.navigate(['/home'])
        } else {
         this.openSnackBar(response.message);
        }

      })
    }
    else {
      Object.keys(this.userForm.controls).forEach((item) => {
        this.userForm.get(item).markAsDirty();
        this.userForm.get(item).markAsTouched();
      })
    }

  }

  keyup($event) {
    this.responseMessage = '';
  }

}

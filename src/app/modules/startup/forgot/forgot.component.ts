import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../../../services/appservice.service';
import * as constants from '../../shared/constant';
import { Errors } from '../../../modules/shared/error-class';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css'],
  providers: [Errors]
})
export class ForgotComponent implements OnInit {
  responseMessage:string;
  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
  })
  constructor(private error: Errors,private snackBar:MatSnackBar,private http: AppserviceService, private router: Router) {
    error.errors.validEmail
   }
   openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 1200
    });
  }
  ngOnInit() {
  }
  
  forgotPassword(){
    if (this.userForm.valid) {
        var result = this.http.httpPostLogin(constants.forgotpassword,this.userForm.value.email);
        result.subscribe((response) => {
              if (response.code == 200) {
                this.router.navigate([''])
              }else{
               this.openSnackBar(response.message);
              }
            });
          }else {
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

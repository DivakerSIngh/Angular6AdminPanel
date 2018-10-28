import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as constants from '../../../../shared/constant';
import { ActivatedRoute, Router } from '@angular/router';
import { AppserviceService } from '../../../../../services/appservice.service';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private http: AppserviceService) { }

  validationMessage = constants.validationMessage
  userForm = new FormGroup({
    password: new FormControl('', [Validators.required]),
    confirm_password: new FormControl('', [Validators.required]),
    oldPassword: new FormControl('', [Validators.required])
  })
  ngOnInit() {
  }

  changePassword(obj) {
    
    var json={"oldPassword":obj.oldPassword,"newPassword":obj.password}
    this.http.httpPost(constants.changePassword, json).subscribe(() => {
      

    })

  }

}

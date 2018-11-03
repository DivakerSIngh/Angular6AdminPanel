import { Component, OnInit } from '@angular/core';
import * as constants from '../../../../shared/constant';
import { ActivatedRoute, Router } from '@angular/router';
import { AppserviceService } from '../../../../../services/appservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  obj={
    name:localStorage.getItem('name'),
    email:localStorage.getItem('email'),
    phone:localStorage.getItem('phone'),
  }
  constructor(private http: AppserviceService) { }

  validationMessage = constants.validationMessage
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required])
  })
  ngOnInit() {


  }

  update(obj) {
    
    var json={"email":obj.email,"name":obj.name,"phone":obj.phone}
    this.http.httpPost(constants.logeditSettinginUrl, json).subscribe(() => {

    })

  }
}

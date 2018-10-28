import { Component, OnInit } from '@angular/core';
// import { Errors } from '../../../../../modules/shared/error-class';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as constants from '../../../../shared/constant';
import { ActivatedRoute, Router } from '@angular/router';
import { AppserviceService } from '../../../../../services/appservice.service';
@Component({
  selector: 'app-add-subadmin',
  templateUrl: './add-subadmin.component.html',
  styleUrls: ['./add-subadmin.component.css'],

})
export class AddSubadminComponent implements OnInit {

  validationMessage = constants.validationMessage
id:string
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    password: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    dashBoard: new FormControl(),
    accounts: new FormControl(),
    vendors: new FormControl(),
    support: new FormControl(),
    ads: new FormControl(),
    cms: new FormControl()
  })
  constructor(private http: AppserviceService,private route:ActivatedRoute) {
    debugger
    this.id = this.route.snapshot.paramMap.get("id");
    this.get(this.id);
  }

  get(id){
    var result = this.http.httpGet(constants.getSubadminById+id);
    result.subscribe((response) => {
      debugger
        this.userForm=response.data;
    })
  }

  ngOnInit() {
  }



  save(saveForm) {
    debugger
    var res = this.http.httpPost(constants.addSubadmmin, saveForm);
    res.subscribe(() => {
      debugger
      this.userForm.reset();
    })
  }

}

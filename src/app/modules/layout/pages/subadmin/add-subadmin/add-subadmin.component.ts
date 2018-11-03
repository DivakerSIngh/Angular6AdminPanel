import { Component, OnInit } from '@angular/core';
// import { Errors } from '../../../../../modules/shared/error-class';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as constants from '../../../../shared/constant';
import { ActivatedRoute, Router } from '@angular/router';
import { AppserviceService } from '../../../../../services/appservice.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-add-subadmin',
  templateUrl: './add-subadmin.component.html',
  styleUrls: ['./add-subadmin.component.css'],

})
export class AddSubadminComponent implements OnInit {
user:any={};
pageTitle:string="Add"
  validationMessage = constants.validationMessage
  id:string
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    password: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    // dashBoard: new FormControl(),
    // accounts: new FormControl(),
    vendors: new FormControl(),
    support: new FormControl(),
    ads: new FormControl()
    // cms: new FormControl()
  })
  constructor(private snackBar: MatSnackBar, private http: AppserviceService,private route:ActivatedRoute,private router:Router) {
    this.id = this.route.snapshot.paramMap.get("id");
    if(this.id){
      this.pageTitle="Update";
      this.get(this.id);
      this.userForm.controls['email'].disable();
    }

    
  }

  get(id){
    var result = this.http.httpGet(constants.getSubadminById+id);
    result.subscribe((response) => {
      if(response.code==200){
        
       this.user= response.data;
       if(response.data.vendors==1){
       this.user.vendors=true;
       this.userForm.patchValue({vendors: true})
       }
       if(response.data.support==1){
        this.user.support=true;
        this.userForm.patchValue({support: true})
      }
      if(response.data.ads==1){
        this.user.ads=true;
        this.userForm.patchValue({ads: true})
      }
      }
    })
  }

  ngOnInit() {
  }



  save(saveForm) {
    var url=constants.addSubadmmin;
    if(this.id){
      url=constants.updateAdmin;
    }
    saveForm.adminId=this.id;
    
    var res = this.http.httpPost(url, saveForm);
    res.subscribe((response) => {
      this.openSnackBar(response.message);
      this.userForm.reset();
      this.userForm.controls['email'].enable();
      this.router.navigate(["/home/users"]);

    })
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 1500
    });
  }

}

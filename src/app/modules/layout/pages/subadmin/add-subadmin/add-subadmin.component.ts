import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-subadmin',
  templateUrl: './add-subadmin.component.html',
  styleUrls: ['./add-subadmin.component.css']
})
export class AddSubadminComponent implements OnInit {

  subadminObject:{
  name:"",
  email:"",
  phone:"",
  password:0,
  dashBoard:0,
  accounts:0,
  vendors:0,
  support:0,
  ads:0,
  cms:0
}

  constructor() { }

  ngOnInit() {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent implements OnInit {

  constructor() { }

   menuArray: MenuClass[];
  ngOnInit() {
    debugger
    //var userAccess=JSON.parse(localStorage.getItem('user-access'));

  }

  isPermission(name){
    
    var userAccess=JSON.parse(localStorage.getItem('user-access'));
   if(userAccess[name]==1){
     return true;
   }else if(userAccess["role"]!="sub-admin"){
    return true;
   }
  }

}

export class MenuClass{
      name:string
      path:string
      image:string
}

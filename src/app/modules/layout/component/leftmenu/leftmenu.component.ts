import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

   menuArray: MenuClass[];
  ngOnInit() {
  }

  isPermission(name){
    
    var userAccess=JSON.parse(localStorage.getItem('user-access'));
   if(userAccess[name]==1){
     return true;
   }else if(userAccess["role"]!="sub-admin"){
    return true;
   }
  }

  logOut() {
    localStorage.clear()   
    this.router.navigate(['/login'])
  }

}

export class MenuClass{
      name:string
      path:string
      image:string
}

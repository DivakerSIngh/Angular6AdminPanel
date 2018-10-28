import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../../../../../services/appservice.service';
import * as constants from '../../../../shared/constant';
import { ViewChild } from '@angular/core';
import {
  MatToolbar,
  PageEvent,
  MatPaginator,
  MatSpinner,
  MatSnackBar
} from '@angular/material';
@Component({
  selector: 'app-subadmin-list',
  templateUrl: './subadmin-list.component.html',
  styleUrls: ['./subadmin-list.component.css']
})
export class SubadminListComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  adminUsers:any[];
  
  searchObject = {
    limit:0,search:'',plans:"all"
  }
  constructor(private http:AppserviceService,private snackBar:MatSnackBar) { }

 

  ngOnInit() {
    this.getAllSubadmin();
  }

  getAllSubadmin(){
    var url="limit="+this.searchObject.limit+"&search="+this.searchObject.search+"&plans="+this.searchObject.plans+"";
    var result = this.http.httpGet(constants.getAllAdminUsers+url);
    result.subscribe((response) => {
      
      console.log('subadminlist',response.data)
      this.adminUsers=response.data;
    })
  }

  
  search(){
    this.getAllSubadmin();
  }


  getNext(event: PageEvent) {
    let offset = event.pageSize * event.pageIndex;
  }

  enableDisable(id,status){
    
    if(status==0)status=1;else status=0;

    var json={"adminId":id,"active":status};
    var result = this.http.httpPost(constants.activeDeactiveAdmin,json);
    result.subscribe((response) => {
      this.openSnackBar(response.message);
      this.getAllSubadmin();
    })
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 1500
    });
  }

}

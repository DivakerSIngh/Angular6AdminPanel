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
  selector: 'app-support-list',
  templateUrl: './support-list.component.html',
  styleUrls: ['./support-list.component.css']
})
export class SupportListComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  supportList:any[];
  
  searchObject = {
    limit:0,search:'',plans:"all"
  }
  constructor(private http:AppserviceService,private snackBar:MatSnackBar) { }

  ngOnInit() {
    this.getAllAccount();
  }

  getAllAccount(){
    var url="limit="+this.searchObject.limit+"&search="+this.searchObject.search+"&plans="+this.searchObject.plans+"";
    var result = this.http.httpGet(constants.accountUsersList+url);
    result.subscribe((response) => {
      
      console.log('account',response.data)
        this.supportList=response.data;
    })
  }

  search(){
    this.getAllAccount();
  }


  getNext(event: PageEvent) {
    let offset = event.pageSize * event.pageIndex;
  }

  enableDisableAccount(id,status){
    
    if(status==0)status=1;else status=0;

    var json={"userId":id,"active":status};
    var result = this.http.httpPost(constants.enableDisableAccount,json);
    result.subscribe((response) => {
      this.openSnackBar(response.message);
      this.getAllAccount();
    })
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 1500
    });
  }


}

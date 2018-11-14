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
  supportList:any=[];
  totalCount:any;
  searchObject = {
    limit:0,search:'',plans:"all"
  }
  constructor(private http:AppserviceService,private snackBar:MatSnackBar) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    var url="limit="+this.searchObject.limit+"&search="+this.searchObject.search+"&priority="+this.searchObject.plans+"";
    var result = this.http.httpGet(constants.allTicket+url);
    result.subscribe((response) => {
      debugger
      console.log('account',response.data)
        this.supportList=response.data;
        this.totalCount=response.total;
    })
  }

  load(type){
    
this.getAll();
  }

  search(){
    this.getAll();
  }

  closeTicket(id,status,active){

var url=constants.reopenTicket;
if(status==0 && active==0){
  url=constants.closeTicket;
}
    var json={"ticketId":id};
    var result = this.http.httpPost(url,json);
    result.subscribe((response) => {
      this.openSnackBar(response.message);
      this.getAll();
    })

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
      this.getAll();
    })
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 1500
    });
  }


}

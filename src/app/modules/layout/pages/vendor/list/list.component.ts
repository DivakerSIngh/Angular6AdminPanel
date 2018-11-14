import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../../../../../services/appservice.service';
import * as constants from '../../../../shared/constant';
import { ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import {
  MatToolbar,
  PageEvent,
  MatPaginator,
  MatSpinner
} from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  vendorList:any[];
  totalCount:any;
  
  searchObject = {
    limit:0,search:'',plans:"all"
  }
  constructor(private http:AppserviceService,private snackBar:MatSnackBar) { }

  ngOnInit() {
    this.getAllVendor();
  }

  getAllVendor(){
    var url="limit="+this.searchObject.limit+"&search="+this.searchObject.search+"&plans="+this.searchObject.plans+"";
    var result = this.http.httpGet(constants.getAllVendor+url);
    result.subscribe((response) => {
      console.log('vendor',response.data)
        this.vendorList=response.data;
        this.totalCount=response.totals;
    })
  }

  search(){
    this.getAllVendor();
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 1500
    });
  }

  getNext(event: PageEvent) {
    let offset = event.pageSize * event.pageIndex;
  }

  enableDisable(id,status){
    
    if(status==0)status=1;else status=0;
    var json={"vendorId":id,"active":status};
    var result = this.http.httpPost(constants.enableDisableVendor,json);
    result.subscribe((response) => {
      this.openSnackBar(response.message);
      this.getAllVendor();
    })
  }


}

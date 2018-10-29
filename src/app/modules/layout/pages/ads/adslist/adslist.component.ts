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
  selector: 'app-adslist',
  templateUrl: './adslist.component.html',
  styleUrls: ['./adslist.component.css']
})
export class AdslistComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  adminUsers:any[];
  
  searchObject = {
    limit:0,search:'',plans:"all"
  }
  constructor(private http:AppserviceService,private snackBar:MatSnackBar) { }

  ngOnInit() {
    this.getAllAdds();
  }

  getAllAdds(){
    var url="limit="+this.searchObject.limit+"&search="+this.searchObject.search+"&approved=1";
    var result = this.http.httpGet(constants.getAllAdd+url);
    result.subscribe((response) => {
        this.adminUsers=response.data;
    })
  }

  search(){
    this.getAllAdds();
  }


  getNext(event: PageEvent) {
    let offset = event.pageSize * event.pageIndex;
  }
  ApproveStatus(Id){
    debugger
    var result = this.http.httpGet(constants.approveAddStatus+Id);
    result.subscribe((response) => {
      this.openSnackBar(response.message);
      this.getAllAdds();
    })
  }
  
  enableDisableAccount(id,status){
    
    if(status==0)status=1;else status=0;

    var json={"vendorId":id,"active":status};
    var result = this.http.httpPost(constants.activeDeactiveVender,json);
    result.subscribe((response) => {
      this.openSnackBar(response.message);
      this.getAllAdds();
    })
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 1500
    });
  }


}

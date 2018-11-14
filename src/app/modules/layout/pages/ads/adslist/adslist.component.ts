import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../../../../../services/appservice.service';
import * as constants from '../../../../shared/constant';
import { ViewChild } from '@angular/core';
import {
  MatToolbar,
  PageEvent,
  MatPaginator,
  MatSpinner,
  MatSnackBar,
  MatDialogRef,
  MatDialog
} from '@angular/material';
import { ConfirmationBoxComponent } from '../../../component/confirmation-box/confirmation-box.component';
@Component({
  selector: 'app-adslist',
  templateUrl: './adslist.component.html',
  styleUrls: ['./adslist.component.css']
})
export class AdslistComponent implements OnInit {
  dialogRef: MatDialogRef<ConfirmationBoxComponent>;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  adminUsers:any=[];
  totalCount:any;
  searchObject = {
    limit:0,search:'',plans:"all"
  }
  constructor(private http:AppserviceService,private snackBar:MatSnackBar,public dialog: MatDialog) { }

  ngOnInit() {
    this.getAllAdds();
  }

  getAllAdds(){
    var url="limit="+this.searchObject.limit+"&search="+this.searchObject.search+"&approved=1";
    var result = this.http.httpGet(constants.getAllAdd+url);
    result.subscribe((response) => {
        this.adminUsers=response.data;
        this.totalCount=response.total;
    })
  }

  search(){
    this.getAllAdds();
  }


  getNext(event: PageEvent) {
    let offset = event.pageSize * event.pageIndex;
  }
  ApproveStatus(Id){
    

    this.dialogRef = this.dialog.open(ConfirmationBoxComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.title="Confirm";
    this.dialogRef.componentInstance.confirmMessage="Are you sure want to approve ads!"

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
     this.http.httpGet(constants.approveAddStatus+Id).subscribe((response) => {
      this.openSnackBar(response.message);
      this.getAllAdds();
    })
  }
})
  }
  
  enableDisableAdd(id,status){
    
    this.dialogRef = this.dialog.open(ConfirmationBoxComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.title="Confirm";
    this.dialogRef.componentInstance.confirmMessage="Are you sure want to delete this add!"

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if(status==0)status=1;else status=0;

        var json={"addId":id};
         this.http.httpPost(constants.deleteAdd,json).subscribe((response) => {
          this.openSnackBar(response.message);
          this.getAllAdds();
        })
      }
    })
    
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 1500
    });
  }


}

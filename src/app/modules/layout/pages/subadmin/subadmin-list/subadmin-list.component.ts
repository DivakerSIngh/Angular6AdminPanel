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
  selector: 'app-subadmin-list',
  templateUrl: './subadmin-list.component.html',
  styleUrls: ['./subadmin-list.component.css']
})
export class SubadminListComponent implements OnInit {
  dialogRef: MatDialogRef<ConfirmationBoxComponent>;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  adminUsers: any=[];

  searchObject = {
    limit: 0, search: '', plans: "all"
  }
  constructor(private http: AppserviceService, private snackBar: MatSnackBar, public dialog: MatDialog) { }



  ngOnInit() {
    this.getAllSubadmin();
  }

  getAllSubadmin() {
    //var url="limit="+this.searchObject.limit+"&search="+this.searchObject.search+"&plans="+this.searchObject.plans+""; phone
    var json = { "email": localStorage.getItem('email'), "name": localStorage.getItem('name'), "phone": localStorage.getItem('phone') };
    var result = this.http.httpPost(constants.getAllAdminUsers, json);
    result.subscribe((response) => {
      
      console.log('subadminlist', response.data)
      this.adminUsers = response.data;
    })
  }

  delete(id) {
  
    this.dialogRef = this.dialog.open(ConfirmationBoxComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.title="Confirm";
    this.dialogRef.componentInstance.confirmMessage="Are you sure want to delete !"

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        var json = { "adminId": id }
        this.http.httpPost(constants.deleteSubadmin, json).subscribe((response) => {
          this.openSnackBar(response.message);
          this.getAllSubadmin();
        })
      }
    })
  }


  search() {
    this.getAllSubadmin();
  }


  getNext(event: PageEvent) {
    let offset = event.pageSize * event.pageIndex;
  }

  enableDisable(id, status) {


    this.dialogRef = this.dialog.open(ConfirmationBoxComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.title="Confirm";
    this.dialogRef.componentInstance.confirmMessage="Are you sure want to change status !"

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {

        if (status == 0) status = 1; else status = 0;

        var json = { "adminId": id, "active": status };
      this.http.httpPost(constants.activeDeactiveAdmin, json).subscribe((response) => {
          this.openSnackBar(response.message);
          this.getAllSubadmin();
        })
      }})

  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 1500
    });
  }

}

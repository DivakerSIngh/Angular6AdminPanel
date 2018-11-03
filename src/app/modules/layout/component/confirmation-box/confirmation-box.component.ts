import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirmation-box',
  templateUrl: './confirmation-box.component.html',
  styleUrls: ['./confirmation-box.component.css']
})
export class ConfirmationBoxComponent implements OnInit {

  public title: string;
  public IsStatus:any=false;
  public message: string;
  public titleAlign?: string;
  public messageAlign?: string;
  public btnOkText?: string;
  public btnCancelText?: string;
  public confirmMessage:string;
  public IsDetailsView:any=false;
  public details:string;
  public btnCancelButtonShow: Boolean=true;
  public eventCreatedBy:string;
  public eventType:string;
  public eventName:string;
  
  constructor(public dialogRef: MatDialogRef<ConfirmationBoxComponent>) { }

  ngOnInit() {
  }

}

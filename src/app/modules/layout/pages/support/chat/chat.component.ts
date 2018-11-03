import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as constants from '../../../../shared/constant';
import { AppserviceService } from '../../../../../services/appservice.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  id: any;
  chatList: any = [];
  adminName: any;
  adminImage: any;
  comment:string='';
  constructor(private router: Router, private snackBar: MatSnackBar, private route: ActivatedRoute, private http: AppserviceService) {
    this.adminName = localStorage.getItem('name');

    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id) {
      this.getAll(this.id);
    }

  }

  ngOnInit() {
  }
  getAll(id) {
    
    var result = this.http.httpGet(constants.allConversation + id);
    result.subscribe((response) => {
      
      console.log('conversation', response.data.conversation)
      this.chatList = response.data;

    })
  }


  closeTicket(id, status, active) {
    
    var url = constants.reopenTicket;
    if (status == 0 && active == 0) {
      url = constants.closeTicket;
    }
    var json = { "ticketId": id };
    var result = this.http.httpPost(url, json);
    result.subscribe((response) => {
      this.openSnackBar(response.message);
      this.router.navigate(["/home/support"]);

    })

  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 1500
    });
  }

  postConversation(id) {
    debugger
    var obj = {
      "ticketId": id,
      "message": this.comment
    }
    this.http.httpPost(constants.postConversation, obj).subscribe((response) => {
      this.getAll(this.id);
      this.comment="";
    })


  }
}

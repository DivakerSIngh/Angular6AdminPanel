import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppserviceService } from '../../../../../services/appservice.service';
import * as constants from '../../../../shared/constant';
@Component({
  selector: 'app-ads-details',
  templateUrl: './ads-details.component.html',
  styleUrls: ['./ads-details.component.css']
})
export class AdsDetailsComponent implements OnInit {

  id:string='';
  venderDetails:{};

  constructor(private route:ActivatedRoute,private http:AppserviceService) { 
    this.id = this.route.snapshot.paramMap.get("id");
   this.get(this.id);
  }

  ngOnInit() {
  }

  get(id){
    debugger
    var result = this.http.httpGet(constants.getVenderDetail+id);
    result.subscribe((response) => {
        this.venderDetails=response.data;
    })
  }
}

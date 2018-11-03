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
  analytics:any={};

  constructor(private route:ActivatedRoute,private http:AppserviceService) { 
    this.id = this.route.snapshot.paramMap.get("id");
   this.get(this.id);
  }

  ngOnInit() {
  }

  get(id){
    
    var result = this.http.httpGet(constants.analyticsOfAdd+id);
    result.subscribe((response) => {
        this.analytics=response.data;
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppserviceService } from '../../../../../services/appservice.service';
import * as constants from '../../../../shared/constant';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id:string='';
  vendorDetails:{};

  constructor(private route:ActivatedRoute,private http:AppserviceService) { 
    this.id = this.route.snapshot.paramMap.get("id");
   this.get(this.id);
  }

  ngOnInit() {
  }

  get(id){
    var result = this.http.httpGet(constants.vendorDetails+id);
    result.subscribe((response) => {
      console.log('vendordetails',response.data);
        this.vendorDetails=response.data;
    })
  }

}

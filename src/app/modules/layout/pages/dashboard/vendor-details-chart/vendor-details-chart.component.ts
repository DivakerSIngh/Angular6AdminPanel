import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-details-chart',
  templateUrl: './vendor-details-chart.component.html',
  styleUrls: ['./vendor-details-chart.component.css']
})
export class VendorDetailsChartComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    debugger  
    }
  
  labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
   // STATIC DATA FOR THE CHART IN JSON FORMAT.
   chartData = [
     {
       label: '1st Year',
       data: [21, 56, 4, 31, 45, 15, 57, 61, 9, 17, 24, 59] 
     },
     { 
       label: '2nd Year',
       data: [47, 9, 28, 54, 77, 51, 24]
     }
   ];
   
 
   // CHART COLOR.
   colors = [
     { // 1st Year.
       backgroundColor: 'rgba(77,83,96,0.2)'
     },
     { // 2nd Year.
       backgroundColor: 'rgba(30, 169, 224, 0.8)'
     }
   ];
}

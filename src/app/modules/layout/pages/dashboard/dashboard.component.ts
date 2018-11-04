import { Component, OnInit } from '@angular/core';
import { Chart } from "highcharts";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chart= Chart;
  public chartType: string = 'pie';  

  ngOnInit() {
   //this.bindChart()
  }


  countries= ["China","India","USA","Indonesia","Brazil","Other"]
  population= [1376745728,1296834048,331026400,262936096,218622304,3997059073]  
  
  chartOptions = {
    //responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
    scales: {
      scaleShowValues:false,
      xAxes: [{
        display:false,
        stacked: true,
        gridLines:{
          display:false
        }
      }],
      yAxes: [{
        display:false,
        stacked: true,
        gridLines:{
          display:false
        }
      }]
    }
  }
  colors = [
    { // 1st Year.
      backgroundColor: 'rgba(77,83,96)'
    },
    { // 2nd Year.
      backgroundColor: 'rgba(30, 169, 224)'
    }
  ];
}

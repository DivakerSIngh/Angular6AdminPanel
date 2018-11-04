import { Component, OnInit } from '@angular/core';
import { Chart } from "highcharts";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chart= Chart;
  

  ngOnInit() {
   //this.bindChart()
  }

  bindChart(){
    debugger
    let chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Dashboard Chart'
      },
      credits: {
        enabled: true
      },
      xAxis: {
        categories: [1,2,3,4,5,6,7]
      },
      series: [{
        name: 'Jane',
        data: [1, 0, 4]
       }, { 
        name: 'John',
        data: [5, 7, 3]
       }]
    })
  }

}

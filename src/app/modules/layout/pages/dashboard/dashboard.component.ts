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
   this.bindChart()
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
      series: [
        {
          name: 'User',
         data: [{"name":"asdasdasd"},{"name":"asasdasd@yopmail.com"}]
  }]
  
    })
  }

}

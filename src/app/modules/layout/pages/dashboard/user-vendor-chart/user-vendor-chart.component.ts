import { Component, OnInit } from '@angular/core';
import { Chart } from "highcharts";
@Component({
  selector: 'app-user-vendor-chart',
  templateUrl: './user-vendor-chart.component.html',
  styleUrls: ['./user-vendor-chart.component.css']
})
export class UserVendorChartComponent implements OnInit {
  chart= Chart;
  public chartType: string = 'bubble';  
  
  /**
   *
   */
  constructor() {
  }
  ngOnInit() {
    debugger
   //this.bindChart()
  }
  

  bubbleChartData=[  
    {  
        "data": [  
            {  
                "x": 2,  
                "y": 4,  
                // "r": 1  
            },  
            {  
                "x": 6,  
                "y": 4,  
                // "r": 2  
            },  
            {  
                "x": 7,  
                "y": 9,  
                // "r": 12  
            },  
            {  
                "x": 10,  
                "y": 11,  
                // "r": 17  
            },  
            {  
                "x": 20,  
                "y": 17,  
                // "r": 14  
            }  
        ],  
        "label": "Users"  
    },  
    {  
        "data": [  
            {  
                "x": 10,  
                "y": -1,  
                // "r": 19  
            },  
            {  
                "x": -3,  
                "y": 52,  
                // "r": 9  
            },  
            {  
                "x": 48,  
                "y": 25,  
                // "r": 14  
            },  
            {  
                "x": -14,  
                "y": 33,  
                "r": 17  
            },  
            {  
                "x": -5,  
                "y": 0,  
                "r": 10  
            }  
        ],  
        "label": "Vendors"  
    }   
];  
  // countries= ["China","India","USA","Indonesia","Brazil","Other"]
  // population= [1376745728,1296834048,331026400,262936096,218622304,3997059073]  
  
  // chartOptions = {
  //   scales: {
  //     scaleShowValues:false,
  //     xAxes: [{
  //       display:false,
  //       stacked: true,
  //       gridLines:{
  //         display:false
  //       }
  //     }],
  //     yAxes: [{
  //       display:false,
  //       stacked: true,
  //       gridLines:{
  //         display:false
  //       }
  //     }]
  //   }
  // }

  chartColors: Array<any> = [  
    {  
        backgroundColor: 'rgba(0,128,0,1)',  
    },  
    {  
        backgroundColor: 'rgba(77,83,96,1)',  
    },  
    {  
        backgroundColor: 'rgba(255,99,33,1)',  
    },  

    {  
        backgroundColor: 'rgba(0,0,255,1)',  
    },  

    {  
        backgroundColor: 'maroon',  
    }  
];  

  // colors = [
  //   { // 1st Year.
  //     backgroundColor: 'rgba(77,83,96)'
  //   },
  //   { // 2nd Year.
  //     backgroundColor: 'rgba(30, 169, 224)'
  //   }
  // ];
}

interface Bubble {  
  data: Array<BubbleData>;  
  label: string;  
} 

interface BubbleData {  
  x: number;  
  y: number;  
  r: number;  
}
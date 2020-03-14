import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = { 
    chart: {
      type: 'column'
  },
  title: {
      text: 'Trains Delay'
  },
  
  xAxis: {
      categories: [
          '0min',
          '1-5min',
          '6-15min',
          '16-30min',
          '+30min'
      ],
      crosshair: true
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Total trains'
      }
  },
  tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  series:[{
    type: 'column',
    name: 'Trains Delay',
    
    data: [10, 10, 10, 10, 10]

  }]

   }; // required
  
  

  

}

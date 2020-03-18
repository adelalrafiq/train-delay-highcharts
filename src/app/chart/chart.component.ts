import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { TrainDelayService } from '../services/train-delay.service';
import { timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit{
  
  trainInformation:any; 
  delay0:number;
  delay1to5:number;
  delay6to15:number;
  delay16to30:number;
  delayplus30:number;
  dataSource$ = this.call.getNumberOfDelaysPerInterval();
  info:any;
  

  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptions: any = { 
    chart: {
     type:'' 
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

    name: 'Trains Delay',
    
    data:[]

  }]
  
   }; // required
   updateFlag: boolean=false;
 
  constructor(private call:TrainDelayService) { }
  
  ngOnInit(){
    this.callAPI();        
   }

  callAPI(){
     const info = timer(0,60000);
     info.pipe(switchMap(()=>
     this.dataSource$
     
     ))
     .subscribe(
       next=>{
         console.log(next);
         this.trainInformation = next; 
         this.delay0 =this.trainInformation.count0;
         this.delay1to5 =this.trainInformation.count1to5;
         this.delay6to15 =this.trainInformation.count6to15;
         this.delay16to30 =this.trainInformation.count16to30;
         this.delayplus30 =this.trainInformation.countplus30;
         this.chartOptions.series[0].data =[ 
           this.delay0,
           this.delay1to5,
           this.delay6to15,
           this.delay16to30,
           this.delayplus30
          ]
          this.updateFlag=true;
            
       },
       error=>{
         console.log(error);
      },
    )      
  }

  updateChartTyppe(event:any){
    let chartType = event.value;
    if(chartType){
      this.chartOptions.chart.type =chartType;
      this.updateFlag=true;
    }
  }  
    
}
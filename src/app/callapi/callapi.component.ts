import { Component, OnInit } from '@angular/core';
import { TrainDelayService } from '../services/train-delay.service';
import { timer, pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';


export interface PeriodicElement {
  station: string;
  departure: any;
  delay:any;
  platform: any;  
}
@Component({
  selector: 'app-callapi',
  templateUrl: './callapi.component.html',
  styleUrls: ['./callapi.component.css']
})
export class CallapiComponent implements OnInit {
  displayedColumns: string[] = ['station', 'departure','delay','platform'];
  dataSource : {};
  title = 'Train Information';
  
  trainInformation:any; 

  stations$ = this.call.getPosts()

  constructor(private call:TrainDelayService) { }

  ngOnInit(): void {
  }

  //call api
  callAPI(){
    const info = timer(0,60000);
    info.pipe(switchMap(()=>
    this.call.getPosts()
    ))
    .subscribe(
      next=>{
        console.log(next);
        this.trainInformation = next;
        this.dataSource=this.trainInformation.departures.departure.map(dep=>{
          return {
            station:dep.station,
            departure:dep.time,
            delay: dep.delay,
            platform:dep.platform
          }
        })
        /* this.dataSource=[{
          station: this.trainInformation.departures.departure.station,
          departure:this.trainInformation.departures.departure.time,
          delay: this.trainInformation.departures.departure.delay,
          platform: this.trainInformation.departures.departure.platform
        }
        }]; */
         console.log(this.dataSource);
                 
      },
      error=>{
        console.log(error);
      },
    )  
  }

}

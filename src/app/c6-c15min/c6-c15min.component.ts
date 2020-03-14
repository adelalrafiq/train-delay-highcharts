import { Component, OnInit } from '@angular/core';
import { TrainDelayService } from '../services/train-delay.service';
import { timer, pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export interface PeriodicElement {
  
  delay:any;
  
}
@Component({
  selector: 'app-c6-c15min',
  templateUrl: './c6-c15min.component.html',
  styleUrls: ['./c6-c15min.component.css']
})
export class C6C15minComponent implements OnInit {

  displayedColumns: string = 'delay';
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
            delay: dep.delay
          
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

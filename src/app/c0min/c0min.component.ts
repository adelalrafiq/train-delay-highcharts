import { Component, OnInit } from '@angular/core';
import { TrainDelayService } from '../services/train-delay.service';
import { timer, pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export interface PeriodicElement {
  delay: any;
  
}
@Component({
  selector: 'app-c0min',
  templateUrl: './c0min.component.html',
  styleUrls: ['./c0min.component.css']
})
export class C0minComponent implements OnInit {
  displayedColumns: string = 'delay';
  dataSource : {};
  title = 'Train Information';
  
  trainInformation:any; 

  stations$ = this.call.getPosts();
  hhh$ = this.call.getDepartureDelay();
  

  constructor(private call:TrainDelayService) { }

  ngOnInit(): void {
    this.callAPI();
  }

  //call api
  callAPI(){
    const info = timer(0,60000);
    info.pipe(switchMap(()=>
    this.hhh$
    ))
    .subscribe(
      next=>{
        console.log(next);



        this.trainInformation = next;
        /* this.dataSource=this.trainInformation.departures.departure.map(dep=>{
          return {
            station:dep.station,
            departure:dep.time,
            delay: dep.delay
           
          }
        })     */
        this.dataSource=[{
          
          delay: this.trainInformation.departures.departure.delay
         
        }];
         console.log(this.dataSource);
                 
      },
      error=>{
        console.log(error);
      },
    )  
  }

}

import { Component, OnInit } from '@angular/core';
import { TrainDelayService } from '../services/train-delay.service';
import { timer, pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-c1-c5min',
  templateUrl: './c1-c5min.component.html',
  styleUrls: ['./c1-c5min.component.css']
})
export class C1C5minComponent implements OnInit {

  displayedColumns: string[] = ['delay']; 
  title = 'Train Information';
  trainInformation:any; 
  delay:any;
  dataSource$ = this.call. getNumberOfDelaysPerInterval();
  

  constructor(private call:TrainDelayService) { }

  ngOnInit(): void {
   /*  this.callAPI(); */
  }

  //call api
  callAPI(){
    const info = timer(0,60000);
    info.pipe(switchMap(()=>
    this.dataSource$
    ))
    .subscribe(
      next=>{
        console.log(next);
        this.trainInformation = next; 
        this.delay =this.trainInformation.count1to5;          
      },
      error=>{
        console.log(error);
      },
    )  
  }
}

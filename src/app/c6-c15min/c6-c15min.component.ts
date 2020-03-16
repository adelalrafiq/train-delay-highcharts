import { Component, OnInit } from '@angular/core';
import { TrainDelayService } from '../services/train-delay.service';
import { timer, pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-c6-c15min',
  templateUrl: './c6-c15min.component.html',
  styleUrls: ['./c6-c15min.component.css']
})
export class C6C15minComponent implements OnInit {

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
        this.delay =this.trainInformation.count6to15;          
      },
      error=>{
        console.log(error);
      },
    )  
  }
}
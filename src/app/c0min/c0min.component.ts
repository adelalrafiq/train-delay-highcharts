import { Component, OnInit } from '@angular/core';
import { TrainDelayService } from '../services/train-delay.service';
import { timer, pipe } from 'rxjs';
import { switchMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-c0min',
  templateUrl: './c0min.component.html',
  styleUrls: ['./c0min.component.css']
})
export class C0minComponent implements OnInit {
  displayedColumns: string = 'delay'; 
  title = 'Train Information';
  trainInformation:any; 

  dataSource$ = this.call.getDepartureDelay();
  

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
        /* console.log(next); */

        this.trainInformation = next;        
        let count = 0;                   
        for(let i=0,len=this.trainInformation.length;i<len; i++){           
          /* console.log(this.trainInformation[i].delay); */

          if(this.trainInformation[i].delay==0){
             count++;             
            console.log(count);       
          }          
        }                          
      },
      error=>{
        console.log(error);
      },
    )  
  }
}

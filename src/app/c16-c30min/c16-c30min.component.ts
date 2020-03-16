import { Component, OnInit } from '@angular/core';
import { TrainDelayService } from '../services/train-delay.service';
import { timer, pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-c16-c30min',
  templateUrl: './c16-c30min.component.html',
  styleUrls: ['./c16-c30min.component.css']
})
export class C16C30minComponent implements OnInit {

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
        this.delay =this.trainInformation.count16to30;          
      },
      error=>{
        console.log(error);
      },
    )  
  }
}
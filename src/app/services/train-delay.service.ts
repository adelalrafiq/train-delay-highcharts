import { Departure } from './../model/interfaces/departure';
import { TrainInformation } from './../model/interfaces/train-information';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrainDelayService {
 
  constructor(private http: HttpClient) { }

  //call API
  getPosts(){
    return this.http.get('https://api.irail.be/liveboard/?station=gent&format=json');
  }

  /* getDepartureDelay(){
    return this.getPosts().pipe(map((trainInformation:TrainInformation)=>{
      return trainInformation.departures.departure.filter((element:Departure)=>
      element.delay==0).map(dep=>{
        return {
          station:dep.station,
          departure:dep.time,
          delay: dep.delay         
        }
      })    
    }))
  }  */
  getDepartureDelay(){
    return this.getPosts().pipe(map((trainInformation:TrainInformation)=>{
      return trainInformation.departures.departure.map(dep=>{
        return {
          station:dep.station,
          departure:dep.time,
          delay: dep.delay         
        }
      })    
    }))
  } 
  
  getNumberOfDelaysPerInterval(){
    return this.getDepartureDelay().pipe(map((delays:{station:string;departure:number;delay:number}[])=>{
     let count0 =0;
     let count1to5=0;
     let count6to15=0;
     let count16to30=0;
     let countplus30=0;

     delays.forEach((element:{station:string;departure:number;delay:number})=>{
       const delay = element.delay;
       switch (true) {

        case(delay ==0): 
          count0++;      
          break;

        case (delay >=1 && delay<= 5):
          count1to5++;
          break;

        case (delay >=6 && delay<= 15):
          count6to15++;
          break;  
          
        case (delay >=16 && delay<= 30):
          count16to30++;
          break;

        case (delay >30 ):
          countplus30++;
          break;   
                  
       }
     })
     return {
       count0,
       count1to5,
       count6to15,
       count16to30,
       countplus30
     }

      
      
    }))
  }
}

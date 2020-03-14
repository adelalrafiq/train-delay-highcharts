import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TrainInformation } from  '../model/interfaces/train-information'



@Injectable({
  providedIn: 'root'
})
export class TrainDelayService {


  constructor(private http: HttpClient) { }

  //call API
  getPosts(){
    return this.http.get('https://api.irail.be/liveboard/?station=gent&format=json');
  }
  getDepartureDelay(){
    return this.getPosts().pipe(map((trainInformation:TrainInformation)=>
    {
      return trainInformation.departures.departure.map(dep=>{
        return {
          /* station:dep.station,
          departure:dep.time, */
          delay: dep.delay
         
        }
      })    
    }))
  }  
}

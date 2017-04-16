import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EliteApi {
  private baseUrl = 'https://elite-schedule-app-i2-3b2e1.firebaseio.com';
  currentTourney: any = {};

  constructor(private http: Http){

  }

  getTournaments(){
    return this.http.get(this.baseUrl+"/tournaments.json")
    .map(res => res.json()) // ...and calling .json() on the response to return data
    .catch(this.handleError); //...errors if any
  }


  getTournamentData(tourneyId): Observable<any> {
    return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
    .map(res => {
     this.currentTourney =  res.json();
      return this.currentTourney;
    }).catch(this.handleError); //...errors if any
  }

  getCurrentTourney(){
    return this.currentTourney;
  }


  private handleError (error: Response) {
    return Observable.throw('Internal server error: ' + error);
  }
}


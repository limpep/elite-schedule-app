import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EliteApi} from "../../shared/elite-api.service";


@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class Teams {

teams =[];



  constructor(public navCtrl: NavController, public navParams: NavParams, private eliteApi:EliteApi) {
  }

  ionViewDidLoad(){
    let selectedTourney = this.navParams.data;
    this.eliteApi.getTournamentData(selectedTourney.id).
      subscribe(data =>{
        this.teams = data.teams;
    })
  }

 itemTapped($event, team){
  this.navCtrl.push('TeamHome', team);
 }


}

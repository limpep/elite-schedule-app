import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html',
})
export class MyTeams {


  favorites = [
    {team: {id: 6182, name: 'HC ELITE', coach: 'Michelottie'},
    tournamentId: '',
      tournamentName:'March madness' },
    {team: {id: 805, name: 'HC ELITE', coach: 'Michelottie'},
      tournamentId: '',
      tournamentName:'Holiday madness' }

    ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  goToTournaments(){
    this.navCtrl.push('Tournaments');
  }



}

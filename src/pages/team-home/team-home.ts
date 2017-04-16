import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TeamHome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html',
})
export class TeamHome {

  team:any;
  teamDetailsTab ='TeamDetail';
  standingsTab ='Standings';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data
  }


goHome(){
//this.navCtrl.push('MyTeams');
this.navCtrl.popToRoot();
}


}

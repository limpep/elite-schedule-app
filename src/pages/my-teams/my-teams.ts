import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from 'ionic-angular';
import {
  EliteApi
} from "../../shared/elite-api.service";

@IonicPage()
@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html',
})
export class MyTeams {


  favorites = [{
      team: {
        id: 6182,
        name: 'HC ELITE',
        coach: 'Michelottie'
      },
      tournamentId: '',
      tournamentName: 'March madness'
    },
    {
      team: {
        id: 805,
        name: 'HC ELITE',
        coach: 'Michelottie'
      },
      tournamentId: '',
      tournamentName: 'Holiday madness'
    }

  ];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private eliteApi: EliteApi) {}


  goToTournaments() {
    this.navCtrl.push('Tournaments');
  }

  favoriteTapped($event, item) {
    let loader = this.loadingCtrl.create({
      content: 'Getting data..',
      spinner: "crescent"

    });

    loader.present().then(() => {
      this.eliteApi.getTournamentData(item.tournamentId)
        .subscribe(t => this.navCtrl.push('TeamHome', item.team));
    });

  }

}

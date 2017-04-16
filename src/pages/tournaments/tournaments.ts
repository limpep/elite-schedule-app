import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController  } from 'ionic-angular';
import {EliteApi} from "../../shared/elite-api.service";


@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class Tournaments {

  tournaments:any;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private eliteApi:EliteApi,
              private loadingCtrl: LoadingController) {
  }

  itemTapped($event, tourney){
    this.navCtrl.push('Teams', tourney);
    }

  ionViewDidLoad(){
    let loader = this.loadingCtrl.create({
      content:"Getting tournaments....",
      spinner:"crescent"
    });

    loader.present().then(() =>{
      this.eliteApi.getTournaments().subscribe((res)=>{
        this.tournaments = res;
        loader.dismiss();
      },error=>{
        console.log(<any>error);
      });
    });


  }

}

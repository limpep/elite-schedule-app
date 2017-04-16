import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyTeamsModule } from "../pages/my-teams/my-teams.module";
import { TournamentsModule } from "../pages/tournaments/tournaments.module";
import { TeamsModule } from "../pages/teams/teams.module";
import { TeamDetailModule } from "../pages/team-detail/team-detail.module";
import { TeamHomeModule } from "../pages/team-home/team-home.module";
import { StandingsModule } from "../pages/standings/standings.module";
import { EliteApi } from "../shared/shared";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    MyTeamsModule,
    TournamentsModule,
    TeamsModule,
    TeamDetailModule,
    TeamHomeModule,
    StandingsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    EliteApi,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

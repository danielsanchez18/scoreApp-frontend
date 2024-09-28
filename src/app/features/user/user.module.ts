import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserMainPageComponent } from './pages/main-page/main-page.component';
import { SharedModule } from '../../shared/shared.module';
import { UserNavTournamentComponent } from './components/nav-tournament/nav-tournament.component';
import { UserGeneralPageComponent } from './pages/general/general-page.component';
import { UserGeneralAllComponent } from './pages/general/all/general-all.component';
import { UserTournamentPageComponent } from './pages/tournament/tournament-page.component';
import { UserTournamentSummaryComponent } from './pages/tournament/summary/tournament-summary.component';
import { UserTournamentResultsComponent } from './pages/tournament/results/tournament-results.component';
import { UserTournamentFixturesComponent } from './pages/tournament/fixtures/tournament-fixtures.component';
import { UserTournamentStandingsComponent } from './pages/tournament/standings/tournament-standings.component';
import { UserTeamPageComponent } from './pages/team/team-page.component';
import { UserTeamSummaryComponent } from './pages/team/summary/team-summary.component';
import { UserTeamResultsComponent } from './pages/team/results/team-results.component';
import { UserTeamStandingsComponent } from './pages/team/standings/team-standings.component';
import { UserTeamFixturesComponent } from './pages/team/fixtures/team-fixtures.component';
import { UserTeamSquadComponent } from './pages/team/squad/team-squad.component';
import { UserMatchPageComponent } from './pages/match/match-page.component';
import { UserMatchH2hComponent } from './pages/match/h2h/match-h2h.component';
import { UserMatchLineupsComponent } from './pages/match/lineups/match-lineups.component';
import { UserMatchStandingsComponent } from './pages/match/standings/match-standings.component';
import { UserMatchStatsComponent } from './pages/match/stats/match-stats.component';
import { UserMatchSummaryComponent } from './pages/match/summary/match-summary.component';
import { UserLoginComponent } from './components/login/login.component';
import { UserSearchComponent } from './components/search/search.component';
import { UserSignupComponent } from './components/signup/signup.component';
import { UserForgottenPasswordComponent } from './components/forgotten-password/forgotten-password.component';
import { UserFavoritePageComponent } from './pages/favorite/favorite-page.component';


@NgModule({
  declarations: [
    UserMainPageComponent,
    UserNavTournamentComponent,
    UserLoginComponent,
    UserSearchComponent,
    UserSignupComponent,
    UserForgottenPasswordComponent,

    UserGeneralPageComponent,
    UserGeneralAllComponent,

    UserTournamentPageComponent,
    UserTournamentSummaryComponent,
    UserTournamentResultsComponent,
    UserTournamentFixturesComponent,
    UserTournamentStandingsComponent,

    UserTeamPageComponent,
    UserTeamSummaryComponent,
    UserTeamResultsComponent,
    UserTeamStandingsComponent,
    UserTeamFixturesComponent,
    UserTeamSquadComponent,

    UserMatchPageComponent,
    UserMatchH2hComponent,
    UserMatchLineupsComponent,
    UserMatchStandingsComponent,
    UserMatchStatsComponent,
    UserMatchSummaryComponent,

    UserFavoritePageComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,

    SharedModule
  ],
  exports: [
    UserSearchComponent,
    UserLoginComponent,
    UserSignupComponent,
    UserForgottenPasswordComponent,
    UserNavTournamentComponent
  ]

})
export class UserModule { }

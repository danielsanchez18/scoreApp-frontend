import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { UserMainPageComponent } from './pages/main-page/main-page.component';
import { UserRoutingModule } from './user-routing.module';
import { UserTournamentPageComponent } from './pages/tournament/tournament-page.component';
import { TournamentTableComponent } from './pages/tournament/table/tournament-table.component';
import { TournamentResultsComponent } from './pages/tournament/results/tournament-results.component';
import { TournamentFixturesComponent } from './pages/tournament/fixtures/tournament-fixtures.component';
import { TournamentStatsComponent } from './pages/tournament/stats/tournament-stats.component';
import { TournamentRulesComponent } from './pages/tournament/rules/tournament-rules.component';
import { TeamFixturesComponent } from './pages/teams/fixtures/team-fixtures.component';
import { TeamResultsComponent } from './pages/teams/results/team-results.component';
import { TeamTableComponent } from './pages/teams/table/team-table.component';
import { TeamSquadComponent } from './pages/teams/squad/team-squad.component';
import { UserTeamsPageComponent } from './pages/teams/teams-page.component';
import { UserMatchPageComponent } from './pages/match/match-page.component';
import { MatchSummaryComponent } from './pages/match/summary/match-summary.component';
import { MatchLineupsComponent } from './pages/match/lineups/match-lineups.component';
import { MatchH2hComponent } from './pages/match/h2h/match-h2h.component';
import { MatchClassificationComponent } from './pages/match/classification/match-classification.component';


@NgModule({
  declarations: [
    UserMainPageComponent,
    UserTournamentPageComponent,
    UserTeamsPageComponent,
    UserMatchPageComponent,

    MatchClassificationComponent,
    MatchH2hComponent,
    MatchLineupsComponent,
    MatchSummaryComponent,

    TournamentTableComponent,
    TournamentResultsComponent,
    TournamentFixturesComponent,
    TournamentStatsComponent,
    TournamentRulesComponent,

    TeamFixturesComponent,
    TeamResultsComponent,
    TeamTableComponent,
    TeamSquadComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ],
  exports:[]
})
export class UserModule { }

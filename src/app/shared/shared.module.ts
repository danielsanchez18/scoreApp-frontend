import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatchTournamentComponent } from './components/match/tournament/match-tournament.component';
import { MatchRoundComponent } from './components/match/round/match-round.component';
import { RouterModule } from '@angular/router';
import { TableClassificationComponent } from './components/table/classification/table-classification.component';
import { TableTopScorersComponent } from './components/table/top-scorers/table-top-scorers.component';
import { TableCardsComponent } from './components/table/cards/table-cards.component';
import { TableSquadComponent } from './components/table/squad/table-squad.component';
import { TableStatsComponent } from './components/table/stats/table-stats.component';
import { TableLineupsComponent } from './components/table/lineups/table-lineups.component';
import { TableH2hComponent } from './components/table/h2h/table-h2h.component';
import { TableRequestsComponent } from './components/table/requests/table-requests.component';
import { ButtonPrimaryComponent } from './components/button/button-primary.component';
import { ButtonSecondaryComponent } from './components/button/button-secondary.component';


@NgModule({
  declarations: [
    NavbarComponent,
    MatchTournamentComponent,
    MatchRoundComponent,
    TableClassificationComponent,
    TableTopScorersComponent,
    TableCardsComponent,
    TableSquadComponent,
    TableStatsComponent,
    TableLineupsComponent,
    TableH2hComponent,
    TableRequestsComponent,
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    MatchRoundComponent,
    MatchTournamentComponent,
    TableClassificationComponent,
    TableTopScorersComponent,
    TableCardsComponent,
    TableSquadComponent,
    TableLineupsComponent,
    TableH2hComponent,
    TableRequestsComponent,
    TableStatsComponent,
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
  ]
})
export class SharedModule { }

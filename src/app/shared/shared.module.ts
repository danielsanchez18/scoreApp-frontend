import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonPrimaryComponent } from './components/buttons/button-primary.component';
import { ButtonSecondaryComponent } from './components/buttons/button-secondary.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { RouterModule } from '@angular/router';
import { NavlinkComponent } from './components/navlink/navlink.component';
import { TableClassificationComponent } from './components/table/classification/classification.component';
import { TableScoreComponent } from './components/table/score/score.component';
import { TableTopScoresComponent } from './components/table/top-scores/top-scores.component';
import { TableCardsComponent } from './components/table/cards/cards.component';
import { TableTeamsComponent } from './components/table/teams/teams.component';
import { NavlinkTeamComponent } from './components/navlink-team/navlink-team.component';
import { TableScoreTeamComponent } from './components/table/score-team/score-team.component';
import { TableSquadComponent } from './components/table/squad/squad.component';
import { NavlinkMatchComponent } from './components/navlink-match/navlink-match.component';



@NgModule({
  declarations: [
    NavbarComponent,
    NavlinkComponent,
    NavlinkTeamComponent,
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    SearchBoxComponent,
    TableClassificationComponent,
    TableScoreComponent,
    TableTopScoresComponent,
    TableCardsComponent,
    TableTeamsComponent,
    TableScoreTeamComponent,
    TableSquadComponent,
    NavlinkMatchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    NavlinkComponent,
    NavlinkTeamComponent,
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    SearchBoxComponent,
    TableClassificationComponent,
    TableScoreComponent,
    TableTopScoresComponent,
    TableCardsComponent,
    TableTeamsComponent,
    TableScoreTeamComponent,
    TableSquadComponent,
    NavlinkMatchComponent

  ]
})
export class SharedModule { }

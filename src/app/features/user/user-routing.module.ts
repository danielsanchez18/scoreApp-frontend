import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserMainPageComponent } from "./pages/main-page/main-page.component";
import { UserTournamentPageComponent } from "./pages/tournament/tournament-page.component";
import { TournamentTableComponent } from "./pages/tournament/table/tournament-table.component";
import { TournamentResultsComponent } from "./pages/tournament/results/tournament-results.component";
import { TournamentFixturesComponent } from "./pages/tournament/fixtures/tournament-fixtures.component";
import { TournamentStatsComponent } from "./pages/tournament/stats/tournament-stats.component";
import { TableTopScoresComponent } from "../../shared/components/table/top-scores/top-scores.component";
import { TableTeamsComponent } from "../../shared/components/table/teams/teams.component";
import { TableCardsComponent } from "../../shared/components/table/cards/cards.component";
import { TournamentRulesComponent } from "./pages/tournament/rules/tournament-rules.component";
import { UserTeamsPageComponent } from "./pages/teams/teams-page.component";
import { TeamResultsComponent } from "./pages/teams/results/team-results.component";
import { TeamFixturesComponent } from "./pages/teams/fixtures/team-fixtures.component";
import { TeamTableComponent } from "./pages/teams/table/team-table.component";
import { TeamSquadComponent } from "./pages/teams/squad/team-squad.component";
import { UserMatchPageComponent } from "./pages/match/match-page.component";
import { MatchSummaryComponent } from "./pages/match/summary/match-summary.component";
import { MatchLineupsComponent } from "./pages/match/lineups/match-lineups.component";
import { MatchH2hComponent } from "./pages/match/h2h/match-h2h.component";
import { MatchClassificationComponent } from "./pages/match/classification/match-classification.component";

const routes: Routes = [
  {
    path: '',
    component: UserMainPageComponent
  },
  {
    path: 'torneo/:id',
    component: UserTournamentPageComponent,
    children: [
      {
        path: 'tabla', component: TournamentTableComponent
      },
      {
        path: '', redirectTo: 'tabla', pathMatch: 'full'
      },
      {
        path: 'resultados', component: TournamentResultsComponent
      },
      {
        path: 'enfrentamientos', component: TournamentFixturesComponent
      },
      {
        path: 'estadisticas', component: TournamentStatsComponent,
        children: [
          {
            path: '', redirectTo: 'goleadores', pathMatch: 'full'
          },
          {
            path: 'goleadores', component: TableTopScoresComponent
          },
          {
            path: 'tarjetas', component: TableCardsComponent
          },
          {
            path: 'equipos', component: TableTeamsComponent
          },
        ]
      },
      {
        path: 'reglas', component: TournamentRulesComponent
      }
    ]
  },
  {
    path: 'equipo/:id',
    component: UserTeamsPageComponent,
    children: [
      {
        path: '', redirectTo: 'resultados', pathMatch: 'full'
      },
      {
        path: 'resultados', component: TeamResultsComponent
      },
      {
        path: 'enfrentamientos', component: TeamFixturesComponent
      },
      {
        path: 'clasificacion', component: TeamTableComponent
      },
      {
        path: 'plantilla', component: TeamSquadComponent
      }
    ]
  },
  {
    path: 'juego/:id', component: UserMatchPageComponent,
    children: [
      {
        path: 'resumen', component: MatchSummaryComponent
      },
      {
        path: '', redirectTo: 'resumen', pathMatch: 'full'
      },
      {
        path: 'alineacion', component: MatchLineupsComponent
      },
      {
        path: 'h2h', component: MatchH2hComponent
      },
      {
        path: 'clasificacion', component: MatchClassificationComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }

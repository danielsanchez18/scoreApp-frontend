import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserMainPageComponent } from './pages/main-page/main-page.component';
import { UserGeneralPageComponent } from './pages/general/general-page.component';
import { CommonModule } from '@angular/common';
import { UserGeneralAllComponent } from './pages/general/all/general-all.component';
import { UserTournamentPageComponent } from './pages/tournament/tournament-page.component';
import { UserTournamentSummaryComponent } from './pages/tournament/summary/tournament-summary.component';
import { UserTournamentResultsComponent } from './pages/tournament/results/tournament-results.component';
import { UserTournamentFixturesComponent } from './pages/tournament/fixtures/tournament-fixtures.component';
import { UserTournamentStandingsComponent } from './pages/tournament/standings/tournament-standings.component';
import { TableClassificationComponent } from '../../shared/components/table/classification/table-classification.component';
import { TableTopScorersComponent } from '../../shared/components/table/top-scorers/table-top-scorers.component';
import { TableCardsComponent } from '../../shared/components/table/cards/table-cards.component';
import { UserTeamPageComponent } from './pages/team/team-page.component';
import { UserTeamSummaryComponent } from './pages/team/summary/team-summary.component';
import { UserTeamResultsComponent } from './pages/team/results/team-results.component';
import { UserTeamFixturesComponent } from './pages/team/fixtures/team-fixtures.component';
import { UserTeamStandingsComponent } from './pages/team/standings/team-standings.component';
import { UserTeamSquadComponent } from './pages/team/squad/team-squad.component';
import { UserMatchPageComponent } from './pages/match/match-page.component';
import { UserMatchSummaryComponent } from './pages/match/summary/match-summary.component';
import { UserMatchStatsComponent } from './pages/match/stats/match-stats.component';
import { UserMatchLineupsComponent } from './pages/match/lineups/match-lineups.component';
import { UserMatchH2hComponent } from './pages/match/h2h/match-h2h.component';
import { UserMatchStandingsComponent } from './pages/match/standings/match-standings.component';
import { TableStatsComponent } from '../../shared/components/table/stats/table-stats.component';
import { UserFavoritePageComponent } from './pages/favorite/favorite-page.component';
import { MatchRoundComponent } from '../../shared/components/match/round/match-round.component';

const routes: Routes = [
  {
    path: '',
    component: UserMainPageComponent,
    children: [
      {
        path: '',
        component: UserGeneralPageComponent,
        children: [
          {
            path: '', component: UserGeneralAllComponent
          }
        ]
      },
      {
        path: 'torneo/:id',
        component: UserTournamentPageComponent,
        children: [
          {
            path: 'resumen', component: UserTournamentSummaryComponent,
            children: [
              {
                path: '', redirectTo: 'tabla', pathMatch: 'full'
              },
              {
                path: 'tabla', component: TableClassificationComponent
              },
              {
                path: 'goleadores', component: TableTopScorersComponent
              },
              {
                path: 'tarjetas', component: TableCardsComponent
              }
            ]
          },
          {
            path: '', redirectTo: 'resumen', pathMatch: 'full'
          },
          {
            path: 'resultados', component: UserTournamentResultsComponent
          },
          {
            path: 'enfrentamientos', component: UserTournamentFixturesComponent
          },
          {
            path: 'clasificacion', component: UserTournamentStandingsComponent,
            children: [
              {
                path: '', redirectTo: 'tabla', pathMatch: 'full'
              },
              {
                path: 'tabla', component: TableClassificationComponent
              },
              {
                path: 'goleadores', component: TableTopScorersComponent
              },
              {
                path: 'tarjetas', component: TableCardsComponent
              }
            ]
          }
        ]
      },
      {
        path: 'equipo/:id',
        component: UserTeamPageComponent,
        children: [
          {
            path: '', component: UserTeamSummaryComponent
          },
          {
            path: 'resultados', component: UserTeamResultsComponent
          },
          {
            path: 'enfrentamientos', component: UserTeamFixturesComponent
          },
          {
            path: 'clasificacion', component: UserTeamStandingsComponent,
            children: [
              {
                path: '', redirectTo: 'tabla', pathMatch: 'full'
              },
              {
                path: 'tabla', component: TableClassificationComponent
              },
              {
                path: 'goleadores', component: TableTopScorersComponent
              },
              {
                path: 'tarjetas', component: TableCardsComponent
              }
            ]
          },
          {
            path: 'plantilla', component: UserTeamSquadComponent
          }
        ]
      },
      {
        path: 'juego/:id',
        component: UserMatchPageComponent,
        children: [
          {
            path: '', component: UserMatchSummaryComponent
          },
          {
            path: 'estadisticas', component: UserMatchStatsComponent,
            children: [
              {
                path: '', component: TableStatsComponent
              },
              {
                path: '1', component: TableStatsComponent
              },
              {
                path: '2', component: TableStatsComponent
              },
              {
                path: '3', component: TableStatsComponent
              },
            ]
          },
          {
            path: 'alineaciones', component: UserMatchLineupsComponent
          },
          {
            path: 'h2h', component: UserMatchH2hComponent
          },
          {
            path: 'clasificacion', component: UserMatchStandingsComponent,
            children: [
              {
                path: '', redirectTo: 'tabla', pathMatch: 'full'
              },
              {
                path: 'tabla', component: TableClassificationComponent
              },
              {
                path: 'goleadores', component: TableTopScorersComponent
              },
              {
                path: 'tarjetas', component: TableCardsComponent
              }
            ]
          }
        ]
      },
      {
        path: 'favoritos',
        component: UserFavoritePageComponent,
        children: [
          {
            path: '', redirectTo: 'equipos', pathMatch: 'full'
          },
          {
            path: 'equipos', component: MatchRoundComponent
          },
          {
            path: 'enfrentamientos', component: MatchRoundComponent
          },
          {
            path: 'live', component: MatchRoundComponent
          },
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

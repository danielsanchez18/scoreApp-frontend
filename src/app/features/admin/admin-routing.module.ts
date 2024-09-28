import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMainPageComponent } from './pages/main-page/main-page.component';
import { AdminGeneralPageComponent } from './pages/general/general-page.component';
import { AdminOverviewPageComponent } from './pages/overview/overview-page.component';
import { AdminTournamentPageComponent } from './pages/tournament/tournament-page.component';
import { AdminMatchPageComponent } from './pages/match/match-page.component';
import { AdminTeamPageComponent } from './pages/team/team-page.component';
import { AdminPlayerPageComponent } from './pages/player/player-page.component';
import { AdminUserPageComponent } from './pages/user/user-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminMainPageComponent,
    children: [
      {
        path: '', component: AdminGeneralPageComponent
      },
      {
        path: 'torneo', component: AdminTournamentPageComponent
      },
      {
        path: 'enfrentamiento', component: AdminMatchPageComponent
      },
      {
        path: 'equipo', component: AdminTeamPageComponent
      },
      {
        path: 'jugador', component: AdminPlayerPageComponent
      },
      {
        path: 'solicitud', component: AdminOverviewPageComponent
      },
      {
        path: 'overview', component: AdminOverviewPageComponent
      },
      {
        path: 'usuario', component: AdminUserPageComponent
      }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

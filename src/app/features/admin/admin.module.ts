import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AdminMainPageComponent } from './pages/main-page/main-page.component';
import { UserModule } from '../user/user.module';
import { AdminNavComponent } from './components/nav-admin/nav-admin.component';
import { AdminTeamPageComponent } from './pages/team/team-page.component';
import { AdminTournamentPageComponent } from './pages/tournament/tournament-page.component';
import { AdminMatchPageComponent } from './pages/match/match-page.component';
import { AdminOverviewPageComponent } from './pages/overview/overview-page.component';
import { AdminGeneralPageComponent } from './pages/general/general-page.component';
import { AdminPlayerPageComponent } from './pages/player/player-page.component';
import { AdminUserPageComponent } from './pages/user/user-page.component';
import { AdminRequestPageComponent } from './pages/request/request-page.component';


@NgModule({
  declarations: [
    AdminMainPageComponent,
    AdminNavComponent,

    AdminGeneralPageComponent,
    AdminMatchPageComponent,
    AdminOverviewPageComponent,
    AdminPlayerPageComponent,
    AdminTeamPageComponent,
    AdminTournamentPageComponent,
    AdminUserPageComponent,
    AdminRequestPageComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,

    UserModule,
    SharedModule,
  ]
})
export class AdminModule { }

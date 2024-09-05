import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserMainPageComponent } from "./pages/main-page/main-page.component";

const routes: Routes = [
  {
    path: '',
    component: UserMainPageComponent
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

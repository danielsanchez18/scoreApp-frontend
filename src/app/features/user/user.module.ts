import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { UserMainPageComponent } from './pages/main-page/main-page.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    UserMainPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }

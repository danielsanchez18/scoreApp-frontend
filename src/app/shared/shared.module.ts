import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavlinkComponent } from './components/navlink/navlink.component';
import { ButtonPrimaryComponent } from './components/buttons/button-primary.component';
import { ButtonSecondaryComponent } from './components/buttons/button-secondary.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';



@NgModule({
  declarations: [
    NavbarComponent,
    NavlinkComponent,
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    NavlinkComponent,
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }

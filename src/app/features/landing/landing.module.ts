import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { NavbarComponent } from 'src/app/core/components/navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { MobilenavbarComponent } from 'src/app/core/components/mobilenavbar/mobilenavbar.component';
import { WorkComponent } from './work/work.component';
import { SkillsComponent } from './skills/skills.component';
import { CareerComponent } from './career/career.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    LandingComponent,
    MainComponent,
    WorkComponent,
    SkillsComponent,
    CareerComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    NavbarComponent,
    MobilenavbarComponent,
    FontAwesomeModule
  ]
})
export class LandingModule { }

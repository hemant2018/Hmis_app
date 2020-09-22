import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { ProfileComponent } from './profile/profile.component';
import { BrowserModule } from '@angular/platform-browser';
import { ComplaintsComponent } from './complaints/complaints.component';
import { TriageComponent } from './triage/triage.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule
  ],
  declarations: [DashboardPage, ProfileComponent, ComplaintsComponent, TriageComponent, LandingPageComponent, HeaderComponent]
})
export class DashboardPageModule {}

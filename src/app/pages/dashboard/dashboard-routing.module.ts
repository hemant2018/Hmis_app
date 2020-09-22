import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';
import { ProfileComponent } from './profile/profile.component';
import { TriageComponent } from './triage/triage.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { MedicalRecordsComponent } from './medical-records/medical-records.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children:[
      {
        path:'home',
        component:LandingPageComponent,
        pathMatch:'full'
      },
      {
        path:'profile',
        component:ProfileComponent,
        pathMatch:'full'
      },
      {
        path:'triage',
        component:TriageComponent,
        pathMatch:'full'
      },
      {
        path:'complaints',
        component:ComplaintsComponent,
        pathMatch:'full'
      },
      {
        path:'medicalRecords',
        component:MedicalRecordsComponent,
        pathMatch:'full'
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}

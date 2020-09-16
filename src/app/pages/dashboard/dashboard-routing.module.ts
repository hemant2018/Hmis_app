import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';
import { ProfileComponent } from './profile/profile.component';
import { TriageComponent } from './triage/triage.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { MedicalRecordsComponent } from './medical-records/medical-records.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'triage',
    component:TriageComponent
  },
  {
    path:'complaints',
    component:ComplaintsComponent
  },
  {
    path:'medicalRecords',
    component:MedicalRecordsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}

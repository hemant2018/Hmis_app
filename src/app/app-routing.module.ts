import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TriageComponent } from './triage/triage.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { MedicalRecordsComponent } from './medical-records/medical-records.component';
import { ProfileComponent } from './pages/dashboard/profile/profile.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'triage',
    component:TriageComponent
  },
  {
    path: 'complaints',
    component:ComplaintsComponent
  },
  {
    path: 'medical-records',
    component:MedicalRecordsComponent
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in.module').then( m => m.SignInPageModule)
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

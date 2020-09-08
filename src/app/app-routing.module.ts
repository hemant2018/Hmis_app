import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { TriageComponent } from './triage/triage.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    // redirectTo: 'home',
    // pathMatch: 'full',
    component:ProfileComponent
  },
  {
    path: 'triage',
    // redirectTo: 'home',
    // pathMatch: 'full'
    component:TriageComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

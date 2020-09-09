import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInPage } from './sign-in.page';
import {MobileNoPage} from './mobile-no/mobile-no.page'
import { OtpVerificationPage } from './otp-verification/otp-verification.page';
import { LocationPage } from './location/location.page';

const routes: Routes = [
  {
    path: '',
    component: SignInPage
  },
  {
    path: 'mobileSignIn',
    component: MobileNoPage
  },
  {
    path: 'otpVerify',
    component:OtpVerificationPage 
  },
  {
    path: 'location',
    component:LocationPage 
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignInPageRoutingModule {}

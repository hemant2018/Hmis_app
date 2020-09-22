import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { SignInPage } from './sign-in.page';
import { MobileNoPage } from './mobile-no/mobile-no.page';
import { OtpVerificationPage } from './otp-verification/otp-verification.page';
import { LocationPage } from './location/location.page';
import { RouterModule } from '@angular/router';
import { DashboardPageModule } from './dashboard/dashboard.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      { path:'', component: SignInPage},
      { path:'mobileSignIn', component: MobileNoPage, pathMatch:'full'},
      { path:'otpVerify', component: OtpVerificationPage, pathMatch:'full'},
      {path:'location', component:LocationPage, pathMatch:'full'},
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
      }
    ])
  ],
  declarations: [SignInPage, MobileNoPage, OtpVerificationPage, LocationPage]
})
export class SignInPageModule {}

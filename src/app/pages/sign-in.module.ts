import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignInPageRoutingModule } from './sign-in-routing.module';

import { SignInPage } from './sign-in.page';
import { MobileNoPage } from './mobile-no/mobile-no.page';
import { OtpVerificationPage } from './otp-verification/otp-verification.page';
import { LocationPage } from './location/location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignInPageRoutingModule
  ],
  declarations: [SignInPage, MobileNoPage, OtpVerificationPage, LocationPage]
})
export class SignInPageModule {}

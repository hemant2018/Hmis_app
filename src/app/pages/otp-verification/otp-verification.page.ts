import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.page.html',
  styleUrls: ['./otp-verification.page.css'],
})
export class OtpVerificationPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(){
    this.router.navigate(['/sign-in/location'])
  }

  changeMobileNo(){
    this.router.navigate(['/sign-in/mobileSignIn'])
  }

}

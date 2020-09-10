import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.page.html',
  styleUrls: ['./otp-verification.page.css'],
})
export class OtpVerificationPage implements OnInit {
  optNo:any;
  inValidOptNo:boolean = false;
  optNoError:boolean = false;
  constructor(private router: Router) { 
  }

  ngOnInit() {
    this.optNo= '';
    this.inValidOptNo = false;
    this.optNoError = false;
  }

  optNoValid(value){
    if(value != undefined || value.toString().length === 6){
      this.optNoError = false;
      this.inValidOptNo = false;
    }else{
      this.optNoError = true;
    }
  }

  navigate(){
    if(this.optNo.toString().length === 6){
      this.inValidOptNo = false;
      this.router.navigate(['/sign-in/location'])
    }else{
      this.inValidOptNo = true
    }
    
  }

  changeMobileNo(){
    this.router.navigate(['/sign-in/mobileSignIn'])
  }


}

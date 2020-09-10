import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-no',
  templateUrl: './mobile-no.page.html',
  styleUrls: ['./mobile-no.page.css'],
})
export class MobileNoPage implements OnInit {
  mobileNo:any;
  mobileNOError:boolean = true;
  inValidMobileNo:boolean = false;
  constructor(private router: Router) {
   }

  ngOnInit() {
    console.log('chauhan')
    this.mobileNo = ''
    this.mobileNOError = true;
    this.inValidMobileNo = false;
  }

  mobileNoMethod(value){
    if(value != undefined || value.toString().length > 0){
        this.inValidMobileNo = false;
        this.mobileNOError = true;
  }else{
    this.inValidMobileNo= false;
  }
}

  navigate(){
    if(this.mobileNo != undefined){
      this.inValidMobileNo = false;
        if(this.mobileNo.toString().length > 10){
          this.mobileNOError = false
        }else if(this.mobileNo.toString().length === 10){
          this.mobileNOError = true
          this.router.navigate(['/sign-in/otpVerify'])
        }else{
          this.mobileNOError = false;
        }
    }else{
        this.inValidMobileNo = true;
        this.mobileNOError = true;
    }
  }

}

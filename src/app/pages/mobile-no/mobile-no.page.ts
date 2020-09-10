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
  constructor(private router: Router) { }

  ngOnInit() {
  }

  mobileNoMethod(){
    if(this.mobileNo != undefined){
   if(this.mobileNo.toString().length >0){
        this.inValidMobileNo = false;
    } else{
      this.inValidMobileNo = true;
    }
  }else{
    this.inValidMobileNo= false;
  }
}

  navigate(){
    if(this.mobileNo != undefined){
      this.inValidMobileNo = false;
      console.log(this.mobileNo);
        if(this.mobileNo.toString().length > 10){
          this.mobileNOError = false
          console.log('greater than 10')
        }else if(this.mobileNo.toString().length === 10){
          this.mobileNOError = true
          this.router.navigate(['/sign-in/otpVerify'])
        }else{
          console.log('less than 10');
          this.mobileNOError = false;
        }
    }else{
        this.inValidMobileNo = true;
        this.mobileNOError = true;
    }
  }

}

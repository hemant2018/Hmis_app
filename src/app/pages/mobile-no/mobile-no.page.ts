import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-no',
  templateUrl: './mobile-no.page.html',
  styleUrls: ['./mobile-no.page.css'],
})
export class MobileNoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(){
    this.router.navigate(['/sign-in/otpVerify'])
  }

}

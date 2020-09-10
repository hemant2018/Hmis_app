import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.css'],
})
export class DashboardPage implements OnInit {

  constructor(private menu: MenuController, private route:Router) { }

  ngOnInit() {
  }


  closeSidenavBar(){
    this.menu.close();
  }

  openSidenavBar(){
    this.menu.open();
  }

  navigateProfile(){
    this.route.navigate(['/sign-in/dashboard/profile'])
  }

}

import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss'],
})
export class ComplaintsComponent implements OnInit {

  constructor(private menu: MenuController, private route:Router) { }

  ngOnInit() {}
  closeSidenavBar(){
    this.menu.close();
  }

  openSidenavBar(){
    this.menu.open();
  }

  logout(){
    this.route.navigate(['/sign-in'])
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-triage',
  templateUrl: './triage.component.html',
  styleUrls: ['./triage.component.scss'],
})
export class TriageComponent implements OnInit {

  

  constructor(private menu: MenuController, private route:Router) { }

   

  ngOnInit() {   }
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

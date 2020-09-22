import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.css'],
})
export class DashboardPage implements OnInit, AfterViewInit {
  selectedPath = '';
  constructor(private menu: MenuController, private router:Router) {
      this.router.events.subscribe((event:RouterEvent)=>{
        this.selectedPath = event.url;
      })
     

   }

  ngOnInit() {
    console.log('same navitation')
    // initially navigate to landing page of dashboard
    this.router.navigate(['/sign-in/dashboard/home'])
  }

  ngAfterViewInit(){
  }

  closeSidenavBar(){
    this.menu.close();
  }


  logout(){
    this.router.navigate(['/sign-in'])
  }

}

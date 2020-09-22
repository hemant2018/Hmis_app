import { Component, OnInit} from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headingValue:any;
  titleValue:any;
  header = [
    {
        title:'Dashboard',
        url:'/sign-in/dashboard/home'
    },
    {
        title:'My Profile',
        url:'/sign-in/dashboard/profile'
    },
    {
      title:'My Triage',
      url:'/sign-in/dashboard/triage'
    },
    {
      title:'My Complaints',
      url:'/sign-in/dashboard/complaints'
    }
  ]
  constructor(private menu: MenuController, private router:Router) {}

  ngOnInit() {
    this.headingValue = this.router.url
    this.header.forEach(obj =>{
      if(obj.url === this.headingValue){
          this.titleValue = obj.title
      }
    })
  }

  logout(){
    this.router.navigate([''])
  }

}

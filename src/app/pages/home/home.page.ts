import { Component, ViewChild } from '@angular/core';
import { IonSlides} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.css'],
})
export class HomePage {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  @ViewChild('homeSlider')  slides: IonSlides;
  constructor(private router: Router) {}

  swipeNext(){
    this.slides.slideNext();
  }

  navigate(){
    this.router.navigate(['/sign-in'])
  }

}

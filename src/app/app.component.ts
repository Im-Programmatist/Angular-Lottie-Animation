import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-lotte-animation';
  
  options: AnimationOptions = {
    // path: '/assets/animation_ll0rj51v.json',
    path: '/assets/animation1.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  options2: AnimationOptions = {
    path: '/assets/animation2.json',
    // path: 'https://lottie.host/b05a6bce-3e10-431f-bcd4-dcdd0a0684b1/leWC4XgMgF.json'
  };

  animationCreated2(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  options3: AnimationOptions = {
    path: '/assets/animation3.json',
    // path: 'https://lottie.host/b05a6bce-3e10-431f-bcd4-dcdd0a0684b1/leWC4XgMgF.json'
  };

  animationCreated3(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  options4: AnimationOptions = {
    path:  '/assets/animation4.json',
  };

  animationCreated4(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  options5: AnimationOptions = {
    // path: '/assets/animation_ll0rj51v.json',
    path: '/assets/animation5.json',
  };

  animationCreated5(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  options6: AnimationOptions = {
    // path: '/assets/animation_ll0rj51v.json',
    path: '/assets/animation-step6.json',
  };

  animationCreated6(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  options7: AnimationOptions = {
    // path: '/assets/animation_ll0rj51v.json',
    path: '/assets/animation7.json',
  };

  animationCreated7(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  options8: AnimationOptions = {
    // path: '/assets/animation_ll0rj51v.json',
    path: '/assets/animation8.json',
  };

  animationCreated8(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  options9: AnimationOptions = {
    // path: '/assets/animation_ll0rj51v.json',
    path: '/assets/animation4.json',
  };

  animationCreated9(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}

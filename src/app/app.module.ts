import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

// ANimation
// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  // The lottie-web library can be loaded on demand using dynamic import. 
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
  // else
  // return player;
}

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {FormsModule} from "@angular/forms";
import {SignupmodalComponent} from './signupmodal/signupmodal.component';
import {SigninmodalComponent} from './signinmodal/signinmodal.component';
import {CarouselComponent} from './carousel/carousel.component';
import {UserloggedComponent} from './userlogged/userlogged.component';
import {LandingpageComponent} from './landingpage/landingpage.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupmodalComponent,
    SigninmodalComponent,
    CarouselComponent,
    UserloggedComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {Routes} from './services/properties/routes';

import {HeroDetailComponent} from './components/heroDetails/hero-detail.component';
import {NavbarComponent} from './components/navbar/navbar';
import {HeroService} from './services/methods/hero.service';
import { AppComponent }   from './app.component';
import {HeroComponent} from './components/heroComponent/hero.component';
import {HomeModule} from './components/Home/Home';


//this is a boiler plate on where you will include all the components,services, modules
//and routings that will be used for the website
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Routes)
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    NavbarComponent,
    HeroComponent,
    HomeModule
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})


//this is not for routing module
/*@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeroDetailComponent, NavbarComponent ],
  providers: [HeroService],
  bootstrap:    [ AppComponent ]
})*/


export class AppModule { 
}


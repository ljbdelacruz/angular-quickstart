import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HeroDetailComponent} from './components/heroDetails/hero-detail.component';
import {NavbarComponent} from './components/navbar/navbar';
import {HeroService} from './services/methods/hero.service';
import { AppComponent }   from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeroDetailComponent, NavbarComponent ],
  providers: [HeroService],
  bootstrap:    [ AppComponent ]
})


export class AppModule { 
}


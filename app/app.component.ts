import { Component } from '@angular/core';
import {Hero} from './objects/hero';
import {HeroService} from './services/methods/hero.service';

@Component({
  selector: 'my-app',
  templateUrl:'app/test.html'
})
export class AppComponent { 
    //hero:Hero={id:1, name:'Ice Man'};
    //this is how to create a variable in typescript
    constructor(private heroService: HeroService) { }
    heroes=this.heroService.getHeroes();
    //this fetches the data from heroService
    navItems=this.heroService.getNavItems();
    selectedHero: Hero;
    //this is how to create a function in typescript
    onSelect(hero:Hero):void{
      this.selectedHero=hero;
    }
}

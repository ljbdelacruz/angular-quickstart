import { Component } from '@angular/core';
import {Hero} from './../../objects/hero';
import {HeroService} from './../../services/methods/hero.service';

@Component({
  selector: 'hero-module',
  templateUrl:'app/components/heroComponent/heroComponent.html'
})
export class HeroComponent { 
    constructor(private heroService: HeroService) { }
    heroes=this.heroService.getHeroes();
    //this fetches the data from heroService
    selectedHero: Hero;
    //this is how to create a function in typescript
    onSelect(hero:Hero):void{
      this.selectedHero=hero;
    }
}

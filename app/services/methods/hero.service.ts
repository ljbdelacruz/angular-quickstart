import { Injectable } from '@angular/core';
import {Hero} from './../../objects/hero';
import {HEROES} from './../properties/heroes';
import {NavigationItem} from './../../objects/NavigationItem';
import {NavItems} from './../properties/navItems';

//this method service is for getting data from service properties
@Injectable()
export class HeroService {
  getHeroes():Hero[]{
     return HEROES;
  }
  getNavItems(): NavigationItem[]{
      return NavItems;
  }
}
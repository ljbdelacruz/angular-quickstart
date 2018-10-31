import { Component } from '@angular/core';
import {HeroService} from './services/methods/hero.service';


//this is the appCtrl or main html where you will put your navigation bar
//that will be accessible  throughout the page
@Component({
  selector: 'my-app',
  templateUrl:'app/test.html'
})
export class AppComponent { 
    //hero:Hero={id:1, name:'Ice Man'};
    //this is how to create a variable in typescript
    constructor(private heroService: HeroService) { }
    navItems=this.heroService.getNavItems();
}

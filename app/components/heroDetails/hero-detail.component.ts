import { Component, Input } from '@angular/core';
import {Hero} from './../../objects/hero';
@Component({
  selector: 'my-hero-detail',
  templateUrl:'app/components/heroDetails/hero-detail.html'
})
export class HeroDetailComponent {
    @Input() hero:Hero;
}
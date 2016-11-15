import { Component, Input } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NavigationItem} from './../../objects/NavigationItem';

@Component({
  selector: 'navbar',
  templateUrl:'app/components/navbar/navbar.html'
})
//this is the main class 
export class NavbarComponent {
    @Input() navItems:NavigationItem[];
    onSelect(item:NavigationItem):void{
        alert(item.label);
    }
}

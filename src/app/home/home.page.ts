import { Component } from '@angular/core';
import {TooltipEvent} from '../../../projects/ionic-tooltips/src/models/tooltip-event.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tooltipEvent:TooltipEvent = TooltipEvent.CLICK;
  showArrow:boolean = true;
  duration:number = 3000;
}

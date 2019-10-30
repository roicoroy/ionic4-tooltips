import {Component} from '@angular/core';
import {TooltipEvent} from '../../../projects/ionic-tooltips/src/models/tooltip-event.model';

@Component({
  selector:    'app-home',
  templateUrl: 'home.page.html',
  styleUrls: [
    'home.page.scss'
  ],
})
export class HomePage {
  duration:number = 3000;
  showArrow:boolean = true;
  showToggleTooltip:boolean = false;
  tooltipEvent:TooltipEvent = TooltipEvent.CLICK;
}

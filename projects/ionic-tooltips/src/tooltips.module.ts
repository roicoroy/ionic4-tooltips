import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { TooltipBox } from './components/tooltip-box/tooltip-box.component';
import { TooltipController } from './controllers/tooltip.cotroller';
import { TooltipDirective } from './directives/tooltip.directive';

@NgModule({
  entryComponents: [TooltipBox],
  declarations: [TooltipDirective, TooltipBox],
  imports: [CommonModule],
  exports: [TooltipDirective],
})
export class TooltipsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TooltipsModule,
      providers: [TooltipController],
    };
  }
}

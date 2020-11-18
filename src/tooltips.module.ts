import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';

/** Modules **/
export * from './tooltips.module';

/** Components **/
export * from './components/tooltip-box/tooltip-box.component';

import {TooltipBox} from './components/tooltip-box/tooltip-box.component';

/** Controllers **/
export * from './controllers/tooltip.cotroller';

import {TooltipController} from './controllers/tooltip.cotroller';

/** Directives **/
export * from './directives/tooltip.directive';

import {TooltipDirective} from './directives/tooltip.directive';

@NgModule({
  declarations: [
    TooltipDirective,
    TooltipBox
  ],
  entryComponents: [
    TooltipBox
  ],
  exports: [
    TooltipDirective
  ],
  imports: [
    CommonModule
  ]
})
export class TooltipsModule {
  static forRoot():ModuleWithProviders<TooltipsModule> {
    return {
      ngModule: TooltipsModule,
      providers: [
        TooltipController
      ],
    };
  }
}

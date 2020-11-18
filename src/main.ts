import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';

/** Components **/
export * from './components/tooltip-box/tooltip-box.component';

import {TooltipBoxComponent} from './components/tooltip-box/tooltip-box.component';

/** Controllers **/
export * from './controllers/tooltip.cotroller';

import {TooltipController} from './controllers/tooltip.cotroller';

/** Directives **/
export * from './directives/tooltip.directive';

import {TooltipDirective} from './directives/tooltip.directive';

@NgModule({
  declarations: [
    TooltipDirective,
    TooltipBoxComponent
  ],
  entryComponents: [
    TooltipBoxComponent
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

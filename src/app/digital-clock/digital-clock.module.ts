import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockRoutingModule } from './digital-clock-routing.module';
import { DigitalClockBaseComponent } from './shared/digital-clock-base/digital-clock-base.component';
import { ClockCommonComponent } from './digital-clock-common/digital-clock-common/digital-clock-common.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ClockCommonComponent,
    ClockRoutingModule ,
    DigitalClockBaseComponent
  ],
  exports: [
  ],
  providers: [
  ]
})
export class ClockModule { }

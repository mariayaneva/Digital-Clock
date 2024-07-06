import { Component } from '@angular/core';
import { TimeFormatPipe } from '../../pipes/time-format.pipe';
import { TimeParts } from '../../interfaces/time-parts.interface';
import { DigitalClockBaseComponent } from '../../../../../node_modules/digital-clock-lib/marias-digital-clock-library/clock/digital-clock-base.component';

@Component({
  selector: 'app-clock-common',
  standalone: true,
  imports: [DigitalClockBaseComponent, TimeFormatPipe],
  templateUrl: './digital-clock-common.component.html',
  styleUrl: './digital-clock-common.component.scss'
})
export class ClockCommonComponent  { 
  protected timeParts: TimeParts = {
    hours: '',
    minutes: '',
    seconds: '',
    meridiem: ''
  };

  constructor() {
  }

  getCurrentTime(time: string) {
    let parts = time?.split(':');
    if (parts) {
      this.timeParts.hours = parts[0]; 
      this.timeParts.minutes = parts[1]; 
      this.timeParts.seconds = parts[2];
      this.timeParts.meridiem = parts[3]; 
    }
  }
}

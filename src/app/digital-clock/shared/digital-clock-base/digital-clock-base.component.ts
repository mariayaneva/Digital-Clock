
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, NgZone } from '@angular/core';
import { TimeFormatPipe } from '../../pipes/time-format.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-digital-clock-base',
  standalone: true,
  imports: [FormsModule,  TimeFormatPipe, CommonModule],
  providers: [TimeFormatPipe],
  templateUrl: './digital-clock-base.component.html',
  styleUrls: ['./digital-clock-base.component.scss']
})
export class DigitalClockBaseComponent implements OnInit, OnDestroy {
  @Input() timeFormatOption!: string;
  @Output() onClockUpdate: EventEmitter<string> = new EventEmitter();
  
  private updateTimeInterval: any;
  protected allDigits!: number[];
  protected meridiem!: string;

  protected firstColonIndex!: number;
  protected secondColonIndex!: number;

  segments: boolean[][] = [
    [true, false, true, true, true, true, true],  // 0
    [false, false, false, false, true, false, true],  // 1
    [true, true, true, false, true, true, false],  // 2
    [true, true, true, false, true, false, true],  // 3
    [false, true, false, true, true, false, true],  // 4
    [true, true, true, true, false, false, true],  // 5
    [true, true, true, true, false, true, true],  // 6
    [true, false, false, false, true, false, true],  // 7
    [true, true, true, true, true, true, true],  // 8
    [true, true, true, true, true, false, true]   // 9
  ];

  constructor (private timeFormat: TimeFormatPipe, private ngZone: NgZone) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.updateTime();
      this.updateTimeInterval = setInterval(() => {
        this.ngZone.run(() => {
          this.updateTime();
        });
      }, 1000);
    });

  }

  ngOnDestroy() {
    clearInterval(this.updateTimeInterval);
  }

  private setSeparator(format: string) {
    let slicedFormat = format.slice(0, -3);
    this.firstColonIndex = slicedFormat.indexOf(':');
    this.secondColonIndex = slicedFormat.lastIndexOf(':');
  }

  private updateTime(): void {
    const formatted = this.timeFormat.transform(new Date(), this.timeFormatOption);
    let currentTime: string[] = formatted ? formatted.split(':') : [];

    this.allDigits = currentTime.slice(0, 3).join('').split('').map(Number);
    this.meridiem = currentTime[currentTime.length - 1];

    this.setSeparator(formatted);
    this.onClockUpdate.emit(formatted || '');
  }
}


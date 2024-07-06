import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat',
  standalone: true
})
export class TimeFormatPipe implements PipeTransform {
  private padZero(time: number, length: number) {
    return time?.toString().padStart(length, '0');
  }

  transform(timeToFormat: Date, format?: string): string {
    if (!timeToFormat) {
      return ''; 
    }

    if (!format) {
      format = "hh:ss:mm:tt"; // default format
    }
    let hours = timeToFormat?.getHours();
    let minutes = timeToFormat?.getMinutes();
    let seconds = timeToFormat?.getSeconds();
 
    const formatParts = format?.split(':');
    const formattedPart = formatParts?.map(part => {
      switch (part){
        case 'h':
          return (hours % 12 || 12)?.toString(); // transform hours >= 12 to 1-12 format
        case 'hh':
          return this.padZero(hours % 12 || 12, 2);
        case 'H':
          return hours;
        case 'HH':
          return this.padZero(hours, 2);
        case 'm':
          return (minutes % 12 || 12)?.toString();
        case 'mm':
          return this.padZero(minutes, 2);
        case 's':
          return (seconds % 12 || 12)?.toString();
        case 'ss':
          return this.padZero(seconds, 2);
        case 'tt':
          return (hours < 12) ? "am" : "pm";
        default:  return part;
      }
    });

    return formattedPart?.join(':');
  }
}

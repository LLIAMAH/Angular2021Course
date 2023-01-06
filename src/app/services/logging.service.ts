import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  constructor() {
  }

  WriteLog(message: string): void {
    const date = new Date();
    console.log(`${this.formatDate(date)}: ${message}`);
  }

  private padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

  private padTo3Digits(num: number) {
    return num.toString().padStart(3, '0');
  }

  private formatDate(date: Date) {
    return (
      [
        date.getFullYear(),
        this.padTo2Digits(date.getMonth() + 1),
        this.padTo2Digits(date.getDate()),
      ].join('-') +
      ' ' +
      [
        this.padTo2Digits(date.getHours()),
        this.padTo2Digits(date.getMinutes()),
        this.padTo2Digits(date.getSeconds())
      ].join(':') +
      '.' +
      this.padTo3Digits(date.getMilliseconds())
    );
  }
}

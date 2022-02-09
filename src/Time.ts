export class Time {
  private hour: number;
  private minute: number;
  private second: number;

  constructor(hour: number, minute: number, second: number) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }

  getInSeconds() {
    return this.hour * 60 * 60 + this.minute * 60 + this.second;
  }

  printTime() {
    console.log(`
        ==================
          Hours: ${this.hour}
          Minutes: ${this.minute}
          Seconds: ${this.second}
        ==================
        `);
  }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Time = void 0;
class Time {
    constructor(hour, minute, second) {
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
exports.Time = Time;

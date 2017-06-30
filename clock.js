class Clock {
  constructor() {
    this.time = new Date();
    this.hour = this.time.getHours();
    this.minute = this.time.getMinutes();
    this.second = this.time.getSeconds();
    this.printTime();
    setInterval(() => this._tick(), 400);
  }

  printTime() {
    let hour = this.hour;
    let minute = this.minute;
    let second = this.second;
    if (second < 10) {
      second = '0' + second;
    }
    if (minute < 10) {
      minute = '0' + minute;
    }
    if (hour < 10) {
      hour = '0' + hour;
    }
    console.log(`${hour}:${minute}:${second}`);
  }

  _tick() {
    this.second++;
    if (this.second >= 60) {
      this.minute++;
      this.time.setSeconds(0);
      this.second = this.time.getSeconds();
      if (this.minute >= 60) {
        this.hour++;
        this.time.setMinutes(0);
        this.minute = this.time.getMinutes();
      }
    }
    this.printTime();
  }
}

const clock = new Clock();

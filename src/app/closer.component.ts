import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-closer',
  templateUrl: './closer.component.html',
})
export class CloserComponent implements OnInit {
  opened: boolean = false;
  showMe: boolean = false;
  message: string = 'child4';
  constructor() {}

  ngOnInit() {
    this.onStartCloser();
  }

  onStartCloser() {
    if (!this.opened) {
      this.opened = true;
      setTimeout(() => {
        this.showMe = true;
      }, 7000);
    }
  }
}

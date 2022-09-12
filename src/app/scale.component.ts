import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scale',
  templateUrl: './scale.component.html',
})
export class ScaleComponent implements OnInit {
  opened: boolean = false;
  showMe: boolean = false;
  message: string = 'child1';
  constructor() {}

  ngOnInit() {
    this.onStartScale();
  }

  onStartScale() {
    if (!this.opened) {
      this.opened = true;
      setTimeout(() => {
        this.showMe = true;
      }, 1000);
    }
  }
}

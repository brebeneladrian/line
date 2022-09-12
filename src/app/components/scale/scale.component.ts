import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-scale',
  templateUrl: './scale.component.html',
})
export class ScaleComponent implements OnInit {
  @Output() opened: boolean = false;
  @Input() start: boolean = false;

  showMe: boolean = false;
  message: string = 'child1';

  constructor() {}

  ngOnInit() {
    this.onStartScale();
  }

  @Output() onStartScale() {
    if (!this.opened) {
      this.opened = true;
      setTimeout(() => {
        this.showMe = true;
      }, 1000);
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attacher',
  templateUrl: './attacher.component.html',
})
export class AttacherComponent implements OnInit {
  opened: boolean = false;
  showMe: boolean = false;
  message: string = 'Attacher';
  constructor() {}

  ngOnInit() {
    this.onStartAttacher();
  }

  onStartAttacher() {
    if (!this.opened) {
      this.opened = true;
      setTimeout(() => {
        this.showMe = true;
      }, 3000);
    }
  }
}

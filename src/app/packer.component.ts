import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packer',
  templateUrl: './packer.component.html',
})
export class PackerComponent implements OnInit {
  opened: boolean = false;
  showMe: boolean = false;
  message: string = 'Packer';
  constructor() {}

  ngOnInit() {
    this.onStartPacker();
  }

  onStartPacker() {
    if (!this.opened) {
      this.opened = true;
      setTimeout(() => {
        this.showMe = true;
      }, 5000);
    }
  }
}

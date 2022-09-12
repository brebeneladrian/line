import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // alerts: Alert[];
  message: string = 'Prototype of a line-machine !';
  start: boolean = false;

  constructor() {}

  ngOnInit() {}
  onStart() {
    this.start = true;
    console.log('line-machine is started');
  }
}

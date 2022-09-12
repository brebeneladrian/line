import {
  Component,
  Input,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { ScaleComponent } from './components/scale/scale.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // alerts: Alert[];
  @Input() opened: boolean = false;
  @Output() start: boolean = false;

  message: string = 'Prototype of a line-machine !';

  constructor() {}

  ngOnInit() {}
  onStart() {
    this.start = true;
    console.log('line-machine is started');
  }
}

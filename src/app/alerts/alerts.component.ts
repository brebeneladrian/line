import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: '../alerts/alerts.component.html',
})
export class AlertsComponent implements OnInit {
  @Input() opened: boolean = false;

  constructor() {}

  ngOnInit() {}
}

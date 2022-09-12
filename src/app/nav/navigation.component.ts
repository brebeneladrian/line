import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: '../nav/navigation.component.html',
})
export class NavigationComponent implements OnInit {
  @Output() opened: boolean = false;

  constructor() {}

  ngOnInit() {}
}

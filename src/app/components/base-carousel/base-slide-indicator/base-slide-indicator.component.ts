import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'base-slide-indicator',
  templateUrl: './base-slide-indicator.component.html',
  styleUrls: ['./base-slide-indicator.component.css']
})
export class BaseSlideIndicatorComponent implements OnInit {
  @Input() target: string;
  @Input() index: string;
  @Input() active = 'active';
  constructor() { }

  ngOnInit() {
  }

}

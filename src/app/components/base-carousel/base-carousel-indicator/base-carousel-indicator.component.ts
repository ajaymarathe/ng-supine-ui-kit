import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'base-carousel-indicator',
  templateUrl: './base-carousel-indicator.component.html',
  styleUrls: ['./base-carousel-indicator.component.css']
})
export class BaseCarouselIndicatorComponent implements OnInit {
  @Input() target: string;
  @Input() slide: string;
  constructor() { }

  ngOnInit() {
  }

}

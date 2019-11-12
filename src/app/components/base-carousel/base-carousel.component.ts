import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'base-carousel',
  templateUrl: './base-carousel.component.html',
  styleUrls: ['./base-carousel.component.css']
})
export class BaseCarouselComponent implements OnInit {
  @Input() target: string;
  constructor() { }

  ngOnInit() {
  }

}

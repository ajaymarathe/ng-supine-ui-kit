import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'base-spinner',
  templateUrl: './base-spinner.component.html',
  styleUrls: ['./base-spinner.component.css']
})
export class BaseSpinnerComponent implements OnInit {
  @Input() color: string;
  @Input() type: string;
  @Input() size: string;
  constructor() { }

  ngOnInit() {

  }

  setMyStyles() {
    let styles = {
      'height': this.size + 'rem',
      'width': this.size + 'rem',
    };
    return styles;
  }

}

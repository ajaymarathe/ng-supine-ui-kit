import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'base-progress',
  templateUrl: './base-progress.component.html',
  styleUrls: ['./base-progress.component.css']
})
export class BaseProgressComponent implements OnInit {
  @Input() width: string;
  @Input() height: string;
  @Input() type: string;
  @Input() color: string;
  @Input() animation: string;
  constructor() { }

  myStyles = {
    'width': this.width+'%',
  }

  ngOnInit() {
  }

}

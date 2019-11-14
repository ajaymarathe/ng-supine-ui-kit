import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'base-button',
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.css']
})
export class BaseButtonComponent implements OnInit {
  @Input() color: string;
  @Input() type: string;
  @Input() display: string;
  @Input() size: string;
  constructor() { }

  ngOnInit() {
  }

}

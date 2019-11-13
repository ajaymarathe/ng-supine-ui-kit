import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'base-alert',
  templateUrl: './base-alert.component.html',
  styleUrls: ['./base-alert.component.css']
})
export class BaseAlertComponent implements OnInit {
  @Input() color: string;
  @Input() dark: string;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.css']
})
export class BaseModalComponent implements OnInit {
  @Input() target: string;
  @Input() size: string;
  constructor() { }

  ngOnInit() {
  }

}

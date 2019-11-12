import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'base-card-footer',
  templateUrl: './base-card-footer.component.html',
  styleUrls: ['./base-card-footer.component.css']
})
export class BaseCardFooterComponent implements OnInit {

  @Input() ExtraClass: string;
  constructor() { }

  ngOnInit() {
  }

}

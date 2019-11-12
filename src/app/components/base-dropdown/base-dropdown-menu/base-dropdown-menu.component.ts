import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'base-dropdown-menu',
  templateUrl: './base-dropdown-menu.component.html',
  styleUrls: ['./base-dropdown-menu.component.css']
})
export class BaseDropdownMenuComponent implements OnInit {
  @Input() align: string;
  constructor() { }

  ngOnInit() {
  }

}

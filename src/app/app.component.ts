import {Component, OnInit} from '@angular/core';
declare var $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'ng-supine';

  ngOnInit() {
    this.EnablePopOver();
    this.EnablePopOver();
  }


  EnableTooltip(){
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  EnablePopOver(){
    $(function () {
      $('[data-toggle="popover"]').popover();
    });
  }

}

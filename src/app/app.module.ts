import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgFontawesomeModule } from 'ng-fontawesome-icon';

import { AppComponent } from './app.component';
import { BaseNavbarComponent } from './components/base-navbar/base-navbar.component';
import { BaseCardComponent } from './components/base-card/base-card.component';
import { BaseCardBodyComponent } from './components/base-card/base-card-body/base-card-body.component';
import { BaseCardHeaderComponent } from './components/base-card/base-card-header/base-card-header.component';
import { BaseCardFooterComponent } from './components/base-card/base-card-footer/base-card-footer.component';
import { BaseBadgeComponent } from './components/base-badge/base-badge.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseNavbarComponent,
    BaseCardComponent,
    BaseCardBodyComponent,
    BaseCardHeaderComponent,
    BaseCardFooterComponent,
    BaseBadgeComponent
  ],
  imports: [
    BrowserModule,
    NgFontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

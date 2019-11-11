import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgFontawesomeModule } from "ng-fontawesome-icon";

import { AppComponent } from './app.component';
import { BaseNavbarComponent } from './components/base-navbar/base-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseNavbarComponent
  ],
  imports: [
    BrowserModule,
    NgFontawesomeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

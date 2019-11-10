import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaseNavbarComponent } from './components/base-navbar/base-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseNavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

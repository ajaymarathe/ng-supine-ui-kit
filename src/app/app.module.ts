import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

/*fontawesome icon module*/
import { NgFontawesomeModule } from 'ng-fontawesome-icon';

/* custom components*/
import { BaseNavbarComponent } from './components/base-navbar/base-navbar.component';
import { BaseCardComponent } from './components/base-card/base-card.component';
import { BaseCardBodyComponent } from './components/base-card/base-card-body/base-card-body.component';
import { BaseCardHeaderComponent } from './components/base-card/base-card-header/base-card-header.component';
import { BaseCardFooterComponent } from './components/base-card/base-card-footer/base-card-footer.component';
import { BaseBadgeComponent } from './components/base-badge/base-badge.component';
import { BaseButtonComponent } from './components/base-button/base-button.component';
import { BaseDropdownComponent } from './components/base-dropdown/base-dropdown.component';
import { BaseDropdownMenuComponent } from './components/base-dropdown/base-dropdown-menu/base-dropdown-menu.component';
import { BaseCarouselComponent } from './components/base-carousel/base-carousel.component';
import { BaseCarouselIndicatorComponent } from './components/base-carousel/base-carousel-indicator/base-carousel-indicator.component';
import { BaseCarouselInnerComponent } from './components/base-carousel/base-carousel-inner/base-carousel-inner.component';
import { BaseSlideIndicatorComponent } from './components/base-carousel/base-slide-indicator/base-slide-indicator.component';
import { BaseCarouselCaptionComponent } from './components/base-carousel/base-carousel-caption/base-carousel-caption.component';
import { BaseProgressComponent } from './components/base-progress/base-progress.component';
import { BaseSpinnerComponent } from './components/base-spinner/base-spinner.component';
import { BaseModalComponent } from './components/base-modal/base-modal.component';
import { BaseModalHeaderComponent } from './components/base-modal/base-modal-header/base-modal-header.component';
import { BaseModalBodyComponent } from './components/base-modal/base-modal-body/base-modal-body.component';
import { BaseModalFooterComponent } from './components/base-modal/base-modal-footer/base-modal-footer.component';
import { CloseButtonComponent } from './components/close-button/close-button.component';
import { BaseAlertComponent } from './components/base-alert/base-alert.component';

/* routing module*/
import { AppRoutingModule } from './app-routing.module';

/*pages */
import { RegsiterComponent } from './regsiter/regsiter.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseNavbarComponent,
    BaseCardComponent,
    BaseCardBodyComponent,
    BaseCardHeaderComponent,
    BaseCardFooterComponent,
    BaseBadgeComponent,
    BaseButtonComponent,
    BaseDropdownComponent,
    BaseDropdownMenuComponent,
    BaseCarouselComponent,
    BaseCarouselIndicatorComponent,
    BaseCarouselInnerComponent,
    BaseSlideIndicatorComponent,
    BaseCarouselCaptionComponent,
    BaseProgressComponent,
    BaseSpinnerComponent,
    BaseModalComponent,
    BaseModalHeaderComponent,
    BaseModalBodyComponent,
    BaseModalFooterComponent,
    CloseButtonComponent,
    BaseAlertComponent,
    RegsiterComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    NgFontawesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

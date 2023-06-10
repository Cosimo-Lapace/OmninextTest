import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { SectionHeadComponent } from './section-head/section-head.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SectionBodyLeftComponent } from './section-body/section-body.component';
import { SectionBodyIconsComponent } from './section-body-icons/section-body-icons.component';
import { SectionTapeComponent } from './section-tape/section-tape.component';
import { SectionCardComponent } from './section-card/section-card.component';
import { BoxlogoComponent } from './boxlogo/boxlogo.component';
import { RequestsComponent } from './requests/requests.component';
import { PreFooterComponent } from './pre-footer/pre-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SectionHeadComponent,
    CarouselComponent,
    SectionBodyLeftComponent,
    SectionBodyIconsComponent,
    SectionTapeComponent,
    SectionCardComponent,
    BoxlogoComponent,
    RequestsComponent,
    PreFooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { SectionHeadComponent } from './section-head/section-head.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SectionBodyLeftComponent } from './section-body-left/section-body.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SectionHeadComponent,
    CarouselComponent,
    SectionBodyLeftComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

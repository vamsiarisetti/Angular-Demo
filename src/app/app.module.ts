import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

import { AppComponent } from './app.component';


import { FusionChartsModule } from 'angular4-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';

// import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WeatherService } from './weather.service';

// import { CarouselModule } from 'angular4-carousel';
// import {SlideshowModule} from 'ng-simple-slideshow';
// import { NgbdCarouselBasic } from './carousel-basic';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
    // , NgbdCarouselBasic
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FusionChartsModule.forRoot(FusionCharts, Charts, FintTheme),
    // MDBBootstrapModule.forRoot()
    NgxChartsModule,
    BrowserAnimationsModule,
    // CarouselModule
    // SlideshowModule
    NgbModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }

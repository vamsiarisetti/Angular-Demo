import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

import { AppComponent } from './app.component';


import { FusionChartsModule } from 'angular4-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FusionChartsModule.forRoot(FusionCharts, Charts, FintTheme)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

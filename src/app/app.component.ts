import { Component, OnInit } from '@angular/core';
import { DemoserviceService } from './demoservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';

import { WeatherService } from './weather.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  chart = [];
  title = 'app';
  constructor(private _weather: WeatherService) { }

  ngOnInit() {
    this._weather.dailyForecast().subscribe(res => {

      let temp_max = res['list'].map(res => res.main.temp_max)
      let temp_min = res['list'].map(res => res.main.temp_min)
      let alldates = res['list'].map(res => res.dt)

      let weatherDates = []
      alldates.forEach((res) => {
        let jsdate = new Date(res * 1000)
        weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
      })

      Chart.defaults.global.responsive = true;
      Chart.defaults.global.tooltips.enabled = false;
      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: weatherDates,
          datasets: [
            {
              data: temp_max,
              borderColor: '#3cba9f',
              fill: true
            },
            // {
            //   data: temp_min,
            //   borderColor: '#ffcc00',
            //   fill: false
            // },
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true,
              // barPercentage: 0.5,
              barThickness: 50,
              gridLines: {
                display: false
              },
              ticks: {
                padding: 100
              }
            }],
            yAxes: [{
              display: false,
              gridLines: {
                display: false
              }
            }]
          }
        }
      })
    })
  }
}



/*
Important text

=============================== NGX - CHARTS ===============================
npm install @swimlane/ngx-charts --save

Ngx-Charts
https://stackblitz.com/edit/vertical-bar-chart?embed=1&file=app/app.component.ts
https://swimlane.gitbook.io/ngx-charts/installing

https://swimlane.gitbook.io/ngx-charts/examples/bar-charts/vertical-bar-chart
https://swimlane.gitbook.io/ngx-charts/examples/bar-charts/normalized-vertical-bar-chart

-- Create service
https://github.com/swimlane/ngx-charts/issues/421
solution :
https://stackoverflow.com/questions/45532244/unable-to-initialize-ngx-charts-with-api-fetched-data/45533679
*/

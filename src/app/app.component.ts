import { Component, OnInit } from '@angular/core';
import { DemoserviceService } from './demoservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

    // ngx-charts

    view: any[] = [700, 400];

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = false;
    showXAxisLabel = false;
    xAxisLabel = 'Country';
    showYAxisLabel = false;
    yAxisLabel = 'Population';

    colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#AAAAAA']
    };
// ngx-charts
  id = 'chart1';
  width = 600;
  height = 400;
  type = 'column2d';
  dataFormat = 'json';
  dataSource;

  constructor(private service: DemoserviceService) {

    Object.assign(this, { single });

    this.dataSource = {
      'chart': {
        'caption': 'Harry\'s SuperMart',
        'subCaption': 'Top 5 stores in last month by revenue',
        'numberprefix': '$',
        'theme': 'fint',
        'divLineAlpha': '0',
        'allowPinMode': '0',
        // 'palettecolors': '#D3D3D3, #008000'
      },
      'data': [
        {
          'label': 'Bakersfield Central',
          'value': '880000',
          'color': '#D3D3D3'
        },
        {
          'label': 'Garden Groove harbour',
          'value': '730000',
          'color': '#D3D3D3'
        },
        {
          'label': 'Los Angeles Topanga',
          'value': '590000',
          'color': '#D3D3D3'
        },
        {
          'label': 'Compton-Rancho Dom',
          'value': '520000',
          'color': '#D3D3D3'
        },
        {
          'label': 'Daly City Serramonte',
          'value': '330000',
          'color': '#D3D3D3'
        },
        {
          'label': 'Demo',
          'value': '-330000',
          'color': '#008000'
        },
        {
          'label': 'Sample',
          'value': '-100000',
          'color': '#008000'
        }
      ]
    };
   }

  ngOnInit() {
    this.getSrvResp();
  }

  getSrvResp() {
    this.service.getRespFromSrv().subscribe(
      res => console.log('response :' + JSON.stringify(res))
    );
  }
}

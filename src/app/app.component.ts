import { Component, OnInit } from '@angular/core';
import { DemoserviceService } from './demoservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  id = 'chart1';
  width = 600;
  height = 400;
  type = 'column2d';
  dataFormat = 'json';
  dataSource;

  constructor(private service: DemoserviceService) {
    this.dataSource = {
      'chart': {
        'caption': 'Harry\'s SuperMart',
        'subCaption': 'Top 5 stores in last month by revenue',
        'numberprefix': '$',
        'theme': 'fint',
        'divLineAlpha': '0',
        'allowPinMode': '0',
      },
      'data': [
        {
          'label': 'Bakersfield Central',
          'value': '880000'
        },
        {
          'label': 'Garden Groove harbour',
          'value': '730000'
        },
        {
          'label': 'Los Angeles Topanga',
          'value': '590000'
        },
        {
          'label': 'Compton-Rancho Dom',
          'value': '520000'
        },
        {
          'label': 'Daly City Serramonte',
          'value': '330000'
        },
        {
          'label': 'Demo',
          'value': '-330000'
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

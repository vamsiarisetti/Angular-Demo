import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import {RequestOptions, Request, RequestMethod, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DemoserviceService {

  url = 'http://localhost:8080/mock/demo';
  postman_url = 'https://d4de33a3-dba8-4eb8-861b-5c240b4b2d7d.mock.pstmn.io/mock/demo';
  constructor(private http: HttpClient) { }

  options = new RequestOptions({
    method: RequestMethod.Get,
    url: 'http://localhost:8080/mock/demo',
    // headers: new Headers().append('Access-Control-Allow-Origin','Get')
  });

  getRespFromSrv() {
    console.log('In service');
    return this.http.get(this.url);
    // return this.http.get(this.postman_url);
  }
}

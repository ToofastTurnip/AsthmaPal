import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AirQualityProvider {
  apikey = '695116C9-5A29-463A-9C25-A4528987F9CB';
  url;
  distance = '25';

  constructor(public http: HttpClient) {
    console.log('Hello AQ Provider');
    this.url = 'http://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=';
  }

  getWeather(zipcode, date){
    // if this doesn't work try adding .json to the end of the url
    return this.http.get(this.url+zipcode+'&date='+date+'&distance='+this.distance+'&API_KEY='+this.apikey)
    .map(res => res);
  }

}
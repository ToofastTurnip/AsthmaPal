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
    this.url = 'http://www.airnowapi.org/aq/forecast/zipCode';
  }

  getWeather(zipcode:String, date:String){
    console.log("airquality ts zipcode get weather method vairable: "+zipcode)
    let params = {
      'format': 'application/json',
      'zipCode':'19958',
      'date':'2018-04-24',
      'distance': '25',
      'API_KEY':'695116C9-5A29-463A-9C25-A4528987F9CB'
    }

    return this.http.get(this.url, {
      headers: {},
      params: params
    }).map(res => res);
  }

  promisesPromises(res: any) {
    console.log(res);
  }

}
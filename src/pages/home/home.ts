import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { WelcomePage } from '../welcome/welcome';
import { PleaseEnterPage } from '../please-enter/please-enter';
import { ZipcodeProvider } from '../../providers/zipcode/zipcode'
import { AirQualityProvider } from '../../providers/airQuality/airQuality';
// import { LoginPage } from '../login/login'; <= no ned

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  today;
  rawAQ:any;
  zipcode:any;
  location:{
    city: string,
    state: string
  }

  constructor(public navCtrl: NavController, private zipcodeProvider: ZipcodeProvider, private airQualityProvider: AirQualityProvider, public navParams: NavParams, private storage:Storage) {
    this.storage.get('location').then((val) => {
      if (val == null) {
        this.navCtrl.push(PleaseEnterPage);
        this.navCtrl.push(WelcomePage);
      }
    });
    // Token code noted out because no login/register pages in current build^^^
    this.today = new Date();
    var dd = this.today.getDate();
    var mm = this.today.getMonth()+1;
    var yyyy = this.today.getFullYear();
    if(dd<10) {
      dd = '0'+dd
    }
    if(mm<10) {
      mm = '0'+mm
    }
    this.today = yyyy+'-'+mm+'-'+dd;
  }

  ionViewWillEnter(){
    this.storage.get('location').then((val) => {
      if(val != null){
        this.location = JSON.parse(val);
      } else {
        this.location = {
          city: 'Miami',
          state: 'FL'
        }
      }
      this.zipcodeProvider.getWeather(this.location.city, this.location.state).subscribe((weather:any) => {
        this.zipcode = weather.current_observation.display_location.zip;
        console.log("zipcodeprovider get weather home ts method: "+this.zipcode);
      });
      console.log("home ts this.zipcode: "+ this.zipcode)
      this.airQualityProvider.getWeather(this.zipcode, this.today).subscribe((airQuality:any) => {
        this.rawAQ = airQuality.AQI;
        console.log("if the code even gets here print the rawAQ value: "+this.rawAQ);
      });
    });
  }
}

  // Field to display pollen needed
  // Field to display pollution needed
  // Field to display danger level needed

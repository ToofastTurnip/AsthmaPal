import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { WelcomePage } from '../welcome/welcome';
import { PleaseEnterPage } from '../please-enter/please-enter';
// import { LoginPage } from '../login/login'; <= no ned

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  location:{
    city: string,
    state: string
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage) {
    this.storage.get('token').then((val) => {
      if (val == null) {
        this.navCtrl.push(PleaseEnterPage);
      }
    });
  }

  // Field to display pollen needed
  // Field to display pollution needed
  // Field to display danger level needed

}

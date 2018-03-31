import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { Storage } from '@ionic/storage';
import { WelcomePage } from '../welcome/welcome';
import { PleaseEnterPage } from '../please-enter/please-enter';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  location:{
    city: string,
    state: string
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.storage.get('location').then((val) => {
    //   if (val == null) {
        this.navCtrl.push(PleaseEnterPage);
        this.navCtrl.push(WelcomePage);
    //   }
    // });
  }

  // Remove page when enter button is pressed

}

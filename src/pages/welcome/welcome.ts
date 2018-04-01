import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  removePage() {
    this.navCtrl.pop();
  }

  // Need to add app title
  // Need to add logo
  // REMEMBER: The app needs some color lol, looks pretty bland right now (most importantly on this page)

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the PleaseEnterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-please-enter',
  templateUrl: 'please-enter.html',
})

export class PleaseEnterPage {
  city:string;
  state:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage, public toastCtrl: ToastController) {
    this.storage.get('location').then((val) => {
      if (val != null){
        let location = JSON.parse(val);
        this.city = location.city;
        this.state = location.state;
      } else {
        this.city = 'Miami';
        this.state = 'FL';
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PleaseEnterPage');
  }

  saveForm(){
    let location = {
      city: this.city,
      state: this.state
    }
    this.storage.set('location', JSON.stringify(location));
    let toast = this.toastCtrl.create({
      message: 'Location updated!',
      duration: 2000,
      position: 'top'
    });
    this.navCtrl.pop();
  }

}

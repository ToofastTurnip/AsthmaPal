import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  knobValues:any = { lower: 100, upper: 2300 }
  public event = {
    timeStarts: '08:00'
  }

  constructor(public navCtrl: NavController, private storage: Storage, public toastCtrl: ToastController) {

  }

  resetData() {
    let toast = this.toastCtrl.create({
      message: 'Are you sure?',
      duration: 3000,
      showCloseButton: true,
      closeButtonText: 'Yep'
    });
    toast.onDidDismiss((data, role) => {
      if (role == 'close') {
        this.storage.remove('location');
      }
    });
  }

}

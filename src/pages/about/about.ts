import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { PleaseEnterPage } from '../please-enter/please-enter';
// import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Developer note:
 * This file controls the settings page.
 * I haven't changed the name of the file because I'm lazy and afraid it will break something lol.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  knobValues:any = { lower: 900, upper: 2100 }
  public event = {
    timeStarts: '01:00'
  }

  constructor(public navCtrl: NavController, private storage: Storage, public toastCtrl: ToastController/*, private localNotifications: LocalNotifications*/) {

  }

  setNewHomeLocation() {
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
      this.navCtrl.push(PleaseEnterPage);
    });
    toast.present();
  }

  deleteAccount() {
    let toast = this.toastCtrl.create({
      message: 'Are you sure?',
      duration: 3000,
      showCloseButton: true,
      closeButtonText: 'Yep'
    });
    toast.onDidDismiss((data, role) => {
      if (role == 'close') {
        this.storage.remove('location');
        this.storage.remove('token');
      }
      this.navCtrl.push(PleaseEnterPage);
    });
    toast.present();
  }

  // notificationLoop() {
  //   this.localNotifications.schedule({
  //     id: 1,
  //     text: "Inhaler!",
  //     trigger: {at: new Date(new Date().getTime() + 1000)},
  //     sound: isAndroid ? 'file://sound.mp3': 'file://beep.caf',
  //   });
  // }
  

  // Reminder timer needs to be made (delayed notification loop that gets arguments from range and interval)
  // For now, reset data only resets home location so I added line 39 so the app is never without a location (will probably keep that line because the home page may cause null pointer without it)
  // Enter new home location button needed (either prompt alert or instance of please enter page)
  // Low priority: ability to enter symptoms (range in an alert would be sick)

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  knobValues:any = { lower: 100, upper: 2300 }
  public event = {
    timeStarts: '08:00'
  }

  constructor(public navCtrl: NavController) {

  }

}

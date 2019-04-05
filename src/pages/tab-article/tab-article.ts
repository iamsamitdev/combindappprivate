import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Shake } from '@ionic-native/shake';

@IonicPage()
@Component({
  selector: 'page-tab-article',
  templateUrl: 'tab-article.html',
})
export class TabArticlePage {

  randNumber = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private shake: Shake,
    public platform: Platform) {
  }

  ionViewDidLoad() {
    
    if (!this.platform.is('core')) 
    {
      this.platform.ready().then(() => {
        this.shake.startWatch().subscribe(data => {
          this.randNumber = Math.floor((Math.random() * 500) + 1);
        });
      });
    }
  }

}

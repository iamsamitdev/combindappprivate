import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tab-service',
  templateUrl: 'tab-service.html',
})
export class TabServicePage {

  services: string = "general";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabServicePage');
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {

      // เขียน Switch Case เช็คว่า Refresh ข้อมูล Segment ใด
      switch (this.services) {
        case 'general':
          alert('คุณ Reload Tab General');
          break;
        case 'education':
          alert('คุณ Reload Tab Education');
          break;
        case 'special':
          alert('คุณ Reload Tab Special');
          break;
      }

      refresher.complete();
    }, 2000);
  }

}

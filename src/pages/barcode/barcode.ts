import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html',
})
export class BarcodePage {

  data = [];
  scantabs = "scancode"
  qrcodeURL:any;
  mydata_qrcode = "https://www.itgenius.co.th";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private barcodeScanner:BarcodeScanner) {
      this.qrcodeURL = "http://chart.googleapis.com/chart?chs=200x200&cht=qr&chl="+this.mydata_qrcode+"&choe=UTF-8&chld=L|1"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodePage');
  }

  Scan(){
    this.barcodeScanner.scan().then((barcodeData)=>{
      // Success ! Barcode data is here 
      this.data.push(barcodeData.text);
      // Redirect to url
      // window.location.href = barcodeData.text;
    },(err) => { 
      alert('Cannot Read Barcode Data');
    });
  }

}

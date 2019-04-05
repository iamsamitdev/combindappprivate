import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams  } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { MapsPage } from '../maps/maps';
import { CameraPage } from '../camera/camera';
import { BarcodePage } from '../barcode/barcode';
import { Vibration } from '@ionic-native/vibration';

@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})
export class TabHomePage {

  // กำหนด properties ไว้เก็บข้อมูล username จาก localStorage
  usernameLogin:string;
  checkLoginStatus:boolean;

  // ตัวแปรไว้เก็บที่อยู่ของรูป
  base64Image:string = null;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private camera: Camera,
    private vibration:Vibration) {

    if(localStorage.getItem('loginstatus') != null){
      this.usernameLogin = localStorage.getItem('loginstatus');
      this.checkLoginStatus = false;
    }else{
      this.usernameLogin = "";
      this.checkLoginStatus = true;
    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabHomePage');
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }

  chooseGallery(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });
  }

  // ฟังก์ชันส่งไปหน้า Camera
  gotoCamera(){
    this.navCtrl.push(CameraPage)
  }

  // Show Map Method
  showmap()
  {
    this.navCtrl.push(MapsPage)
  }

  // Go to barcode
  gotoScan(){
    this.navCtrl.push(BarcodePage)
  }

  // Vibration
  vibrate(){
    this.vibration.vibrate([2000,1000,2000]);

    // Stop Vibrate
    //this.vibration.vibrate(0);
  }

}

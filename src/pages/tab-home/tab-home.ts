import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams  } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { MapsPage } from '../maps/maps';

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
    private camera: Camera) {

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

  // ฟังก์ชันเรียกกล้องถ่ายรูป
  takeCamera(){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.CAMERA,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });

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


  // Show Map Method
  showmap()
  {
    this.navCtrl.push(MapsPage)
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController  } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

   // กำหนด propertie ไว้รับค่าจากฟอร์ม
   userData = {
    "username":'',
    "password":'',
  }

  // กำหนด propertie ไว้รับค่าจาก API
  responseData:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public webapi: WebapiServiceProvider,
    public alertCtrl: AlertController,
    public menu: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.menu.swipeEnable(false);
  }

  loginsubmit(){
    this.webapi.postData(this.userData,"login.php").then((result) =>{
      this.responseData = result;
      if(this.responseData.message.text == "Login Success"){
        let alert = this.alertCtrl.create({
          title:"สถานะการเข้าระบบ",
          subTitle:"เข้าระบบเรียบร้อย",
          buttons:['Close']
        });
        alert.present();

        // สร้างตัวแปรประเภท local storage
        localStorage.setItem("loginstatus",this.userData.username);

        // ส่งกลับไปหน้าหลัก
        this.navCtrl.setRoot(TabsPage);
      }else{
        let alert = this.alertCtrl.create({
          title:"สถานะการเข้าระบบ",
          subTitle:"มีข้อผิดไม่สามารถเข้าระบบได้",
          buttons:['Close']
        });
        alert.present();
      }
    });
  }

}

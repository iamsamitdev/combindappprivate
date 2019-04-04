import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  // กำหนด propertie ไว้รับค่าจากฟอร์ม
  userData = {
    "fullname":'',
    "email":'',
    "username":'',
    "password":'',
  }

  // กำหนด propertie ไว้รับค่าจาก API
  responseData:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public webapi: WebapiServiceProvider,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  // Submit to web API
  registersubmit(){
    this.webapi.postData(this.userData,"register.php").then((result) =>{
      this.responseData = result;
      if(this.responseData.message.text == "Register Success"){
        let alert = this.alertCtrl.create({
          title:"สถานะการลงทะเบียน",
          subTitle:"ลงทะเบียนเรียบร้อยแล้ว",
          buttons:['Close']
        });
        alert.present();
        // ส่งกลับไปหน้าหลัก
        this.navCtrl.pop();
      }else{

      }
    });
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, ToastController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { Transfer , TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import { GlobalvarProvider } from '../../providers/globalvar/globalvar';

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  // ตัวแปรไว้เก็บที่อยู่ของรูป
  imgData: any;
  lastImage: string = null
  loading : Loading

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public camera: Camera,
    public file: File,
    public filePath: FilePath,
    public transfer: Transfer,
    public loadingCtrl: LoadingController,
    public webapi: WebapiServiceProvider,
    public toastCtrl: ToastController,
    public global:GlobalvarProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }


  // ฟังก์ชันเรียกกล้องถ่ายรูป
  takeCamera() {

    var options = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.CAMERA,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imagePath) => {
      this.imgData = imagePath

      var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
      var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
      this.copyFileToLocalDir(correctPath, currentName, this.createFileName());

    }, (err) => {
      this.presentToast('Error while selecting image.');
    });

  }  // Take Camera

  // Create a new name for the image
  private createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
    return newFileName;
  }

  // Copy the image to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
      this.lastImage = newFileName;
    }, error => {
      this.presentToast('Error while storing file.');
    });
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return this.file.dataDirectory + img;
    }
  }

  // ฟังก์ชันการอัพโหลดไฟล์และบันทึกไปยังเว็บ API
  uploadData() {
    // ตรวจว่าผู้เลือกไฟล์
    if (this.lastImage !== null) {
      // กำหนดตัวแปรสำหรับเก็บ path ของเว็บ API
      var url = this.global.baseURLAPI+"uploadimage.php";

      // File for Upload
      var targetPath = this.pathForImage(this.lastImage);

      // File name only
      var filename = this.lastImage;

      var options = {
        fileKey: "file",
        fileName: filename,
        chunkedMode: false,
        mimeType: "multipart/form-data",
        params: { 'fileName': filename }
      };

      const fileTransfer: TransferObject = this.transfer.create();

      this.loading = this.loadingCtrl.create({
        content: 'กำลังอัพโหลดไฟล์ภาพ...',
      });

      this.loading.present();

      // Use the FileTransfer to upload the image
      fileTransfer.upload(targetPath, url, options).then(data => {
        this.loading.dismissAll()
        this.presentToast('อัพโหลดไฟล์ภาพเข้าสู่ระบบแล้ว');
      }, err => {
        this.loading.dismissAll()
        this.presentToast('มีข้อผิดพลาด ไม่สามารถอัพโหลดภาพได้.');
      });

    } else {
      this.presentToast('ยังไม่ได้ถ่ายภาพเข้ามา')
    }
  }

}

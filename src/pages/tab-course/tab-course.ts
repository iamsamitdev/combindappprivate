import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import { GlobalvarProvider } from '../../providers/globalvar/globalvar';
import { CoursedetailPage } from '../coursedetail/coursedetail';

@IonicPage()
@Component({
  selector: 'page-tab-course',
  templateUrl: 'tab-course.html',
})
export class TabCoursePage {

  // กำหนด Propertie รับค่าจาก Web API
  courseData: any;
  // Properties เก็บ path รูป
  imgPath:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public webapi: WebapiServiceProvider,
    public global:GlobalvarProvider) {
      this.imgPath = global.baseURLImage;
  }

  feedCourse() {
    this.webapi.getData("feed_course.php").then((result) => {
      this.courseData = result;
    });

   // console.log(this.courseData);
  }

  ionViewDidLoad() {
    this.feedCourse();
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.feedCourse();
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  // ฟังก์ชันเรียกดูหน้ารายละเอียดคอร์ส
  showCourseDetail(cid){
    this.navCtrl.push(CoursedetailPage,{"cid":cid});
  }

}

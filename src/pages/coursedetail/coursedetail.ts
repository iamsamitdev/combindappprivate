import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalvarProvider } from '../../providers/globalvar/globalvar';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';

@IonicPage()
@Component({
  selector: 'page-coursedetail',
  templateUrl: 'coursedetail.html',
})
export class CoursedetailPage {

  // กำหนด Propertie ไว้รับค่าจาก API
  courseDetailData = {
    "cname":'',
    "cdetail":'',
    "cimage":'',
    "cprice":'',
    "cdate":''
  }

  // รับค่า id จากหน้า course
  getCID:any;

  // Image Path
  imgPaht:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public global:GlobalvarProvider,
    public webapi:WebapiServiceProvider) {
      this.getCID = this.navParams.get('cid');
      this.imgPaht = this.global.baseURLImage;
  }

  ionViewDidLoad() {
    this.webapi.getData("feed_course_detail.php?cid="+this.getCID).then((result)=>{
      this.courseDetailData.cname = result[0].name;
      this.courseDetailData.cdetail = result[0].description;
      this.courseDetailData.cimage = result[0].images;
      this.courseDetailData.cprice = result[0].price;
      this.courseDetailData.cdate = result[0].create_at;
    });
  }

}

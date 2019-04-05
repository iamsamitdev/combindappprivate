import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

// Global Variable
declare var google;

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  // Google Map
  @ViewChild('map') mapElement: ElementRef;
  map:any;

  // Lat  and Lon
  lat:any;
  lon:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    // เรียกอ่านพิกัดปัจจุบัน
    this.geolocation.getCurrentPosition().then((result)=>{
      this.lat = result.coords.latitude;
      this.lon = result.coords.longitude;

      // Load Map here...
      let latLng = new google.maps.LatLng(this.lat,this.lon);
      let mapOptions = {
        center: latLng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      
      // Add Marker ปักหมุด
      new google.maps.Marker({
        position: latLng,
        map: this.map,
        icon: 'https://octobercms.com/storage/app/uploads/public/56d/470/c13/thumb_4029_64_64_0_0_auto.png'
      });

    });
  }

}

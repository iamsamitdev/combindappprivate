import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebapiServiceProvider {

  // กำหนด propertie สำหรับไว้เก็บ URL
  baseURLAPI:any;

  constructor(public http: Http) {
    this.baseURLAPI = "http://192.168.1.37/combindappapi/";
  }

  // สร้าง Method สำหรับ Post
  postData(objdata,segment){
    return new Promise((resolve,reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json;charset=UTF-8');
      //headers.append('Authorization', 'Basic c2FtaXQ6c21rMzc3MDQw'); 
      this.http.post(this.baseURLAPI+segment,JSON.stringify(objdata),{headers:headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => { 
        reject(err);  
      }); 
    });
  }

}

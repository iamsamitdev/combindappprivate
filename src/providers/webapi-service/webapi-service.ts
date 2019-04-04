import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { GlobalvarProvider } from '../globalvar/globalvar';

@Injectable()
export class WebapiServiceProvider {

  constructor(public http: Http, public global:GlobalvarProvider) {
  }

  // สร้าง Method สำหรับ Post
  postData(objdata,segment){
    return new Promise((resolve,reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json;charset=UTF-8');
      //headers.append('Authorization', 'Basic c2FtaXQ6c21rMzc3MDQw'); 
      this.http.post(this.global.baseURLAPI+segment,JSON.stringify(objdata),{headers:headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => { 
        reject(err);  
      }); 
    });
  }

  // สร้าง Method สำหรับ GET
  getData(segment){
    return new Promise((resolve,reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json;charset=UTF-8');
      this.http.get(this.global.baseURLAPI+segment,{headers:headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => { 
        reject(err);  
      }); 
    });
  }

}

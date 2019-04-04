import { Injectable } from '@angular/core';

@Injectable()
export class GlobalvarProvider {

  // Developmet API
  baseURLAPI:string = "http://192.168.1.37/combindappapi/";
  baseURLImage:string = "http://192.168.1.37/combindappapi/images/";

  // Production API
  // baseURLAPI:string = "http://itgenius.co.th/combindappapi/";
  //baseURLImage:string = "http://itgenius/combindappapi/images";


  constructor() {
   
  }

}

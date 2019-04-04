import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SideSettingPage } from './side-setting';

@NgModule({
  declarations: [
    SideSettingPage,
  ],
  imports: [
    IonicPageModule.forChild(SideSettingPage),
  ],
})
export class SideSettingPageModule {}

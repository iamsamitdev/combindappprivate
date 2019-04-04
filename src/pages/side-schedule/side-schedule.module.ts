import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SideSchedulePage } from './side-schedule';

@NgModule({
  declarations: [
    SideSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(SideSchedulePage),
  ],
})
export class SideSchedulePageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabCoursePage } from './tab-course';

@NgModule({
  declarations: [
    TabCoursePage,
  ],
  imports: [
    IonicPageModule.forChild(TabCoursePage),
  ],
})
export class TabCoursePageModule {}

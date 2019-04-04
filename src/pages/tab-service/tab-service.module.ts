import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabServicePage } from './tab-service';

@NgModule({
  declarations: [
    TabServicePage,
  ],
  imports: [
    IonicPageModule.forChild(TabServicePage),
  ],
})
export class TabServicePageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabContactPage } from './tab-contact';

@NgModule({
  declarations: [
    TabContactPage,
  ],
  imports: [
    IonicPageModule.forChild(TabContactPage),
  ],
})
export class TabContactPageModule {}

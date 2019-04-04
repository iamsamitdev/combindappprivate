import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SidePortfolioPage } from './side-portfolio';

@NgModule({
  declarations: [
    SidePortfolioPage,
  ],
  imports: [
    IonicPageModule.forChild(SidePortfolioPage),
  ],
})
export class SidePortfolioPageModule {}

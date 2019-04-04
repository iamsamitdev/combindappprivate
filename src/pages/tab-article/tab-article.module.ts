import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabArticlePage } from './tab-article';

@NgModule({
  declarations: [
    TabArticlePage,
  ],
  imports: [
    IonicPageModule.forChild(TabArticlePage),
  ],
})
export class TabArticlePageModule {}

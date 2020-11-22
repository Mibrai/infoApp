import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsSignlePage } from './news-signle';

@NgModule({
  declarations: [
    NewsSignlePage,
  ],
  imports: [
    IonicPageModule.forChild(NewsSignlePage),
  ],
})
export class NewsSignlePageModule {}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CountriesProvider } from '../providers/countries/countries';
import {HttpClientModule} from '@angular/common/http';
import { NewsProvider } from '../providers/news/news';
import {NewsSignlePage} from '../pages/news-signle/news-signle'


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewsSignlePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewsSignlePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CountriesProvider,
    NewsProvider
  ]
})
export class AppModule {}

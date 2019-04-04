import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SideSchedulePage } from '../pages/side-schedule/side-schedule';
import { SidePortfolioPage } from '../pages/side-portfolio/side-portfolio';
import { SidePaymentPage } from '../pages/side-payment/side-payment';
import { SideSettingPage } from '../pages/side-setting/side-setting';
import { TabHomePage } from '../pages/tab-home/tab-home';
import { TabCoursePage } from '../pages/tab-course/tab-course';
import { TabServicePage } from '../pages/tab-service/tab-service';
import { TabArticlePage } from '../pages/tab-article/tab-article';
import { TabContactPage } from '../pages/tab-contact/tab-contact';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

// Web API
import { WebapiServiceProvider } from '../providers/webapi-service/webapi-service';
import { HttpModule } from '@angular/http';
import { GlobalvarProvider } from '../providers/globalvar/globalvar';
import { CoursedetailPage } from '../pages/coursedetail/coursedetail';

// Camera Native Plugin
import { Camera } from '@ionic-native/camera'

@NgModule({
  declarations: [
    MyApp,
    SideSchedulePage,
    SidePortfolioPage,
    SidePaymentPage,
    SideSettingPage,
    TabHomePage,
    TabCoursePage,
    TabServicePage,
    TabArticlePage,
    TabContactPage,
    TabsPage,
    LoginPage,
    RegisterPage,
    CoursedetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SideSchedulePage,
    SidePortfolioPage,
    SidePaymentPage,
    SideSettingPage,
    TabHomePage,
    TabCoursePage,
    TabServicePage,
    TabArticlePage,
    TabContactPage,
    TabsPage,
    LoginPage,
    RegisterPage,
    CoursedetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebapiServiceProvider,
    GlobalvarProvider,
    Camera
  ]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ActiveoffersPage } from '../pages/activeoffers/activeoffers';
import { CommisionPage } from '../pages/commision/commision';
import { SalesPage } from '../pages/sales/sales';
import { AddlistingPage } from '../pages/addlisting/addlisting';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListingServiceProvider } from '../providers/listing-service/listing-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ActiveoffersPage,
    CommisionPage,
    SalesPage,
    AddlistingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ActiveoffersPage,
    CommisionPage,
    SalesPage,
    AddlistingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListingServiceProvider
  ]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddlistingPage } from './addlisting';

@NgModule({
  declarations: [
    AddlistingPage,
  ],
  imports: [
    IonicPageModule.forChild(AddlistingPage),
  ],
})
export class AddlistingPageModule {}

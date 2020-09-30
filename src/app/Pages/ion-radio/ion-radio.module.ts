import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonRadioPageRoutingModule } from './ion-radio-routing.module';

import { IonRadioPage } from './ion-radio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonRadioPageRoutingModule
  ],
  declarations: [IonRadioPage]
})
export class IonRadioPageModule {}

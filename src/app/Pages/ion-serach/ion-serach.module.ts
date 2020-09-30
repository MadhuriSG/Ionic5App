import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonSerachPageRoutingModule } from './ion-serach-routing.module';

import { IonSerachPage } from './ion-serach.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonSerachPageRoutingModule
  ],
  declarations: [IonSerachPage]
})
export class IonSerachPageModule {}

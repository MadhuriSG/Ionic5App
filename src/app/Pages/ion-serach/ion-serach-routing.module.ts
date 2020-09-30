import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonSerachPage } from './ion-serach.page';

const routes: Routes = [
  {
    path: '',
    component: IonSerachPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonSerachPageRoutingModule {}

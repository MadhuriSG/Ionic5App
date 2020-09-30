import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-ion-loading',
  templateUrl: './ion-loading.page.html',
  styleUrls: ['./ion-loading.page.scss'],
})
export class IonLoadingPage {

  constructor(public loadingController:LoadingController) { }

 
  showHideAutoLoader() {
    
    this.loadingController.create({
      message: 'This Loader Will Auto Hide in 5 Seconds',
      spinner: 'lines',
      cssClass: 'custom-loader-class',
      duration: 5000
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed! after 5 Seconds', dis);
      });
    });

  }

}

import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { IonModalPage } from '../ion-modal/ion-modal.page'

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.page.html',
  styleUrls: ['./secondpage.page.scss'],
})
export class SecondpagePage {

  constructor(public modalController: ModalController) {}
  public lunch ={
    maincourse: 'rice-plate',
    desert: 'jalebi'
  }

  async openModelWithData() { 
    const modal = await this.modalController.create({
      component: IonModalPage,
      componentProps: {
       lunch:this.lunch
      }
    });
    return await modal.present();
  } 

  async showModal() { 
    const modal = await this.modalController.create({
      component: IonModalPage
    });
    return await modal.present();
  } 

}

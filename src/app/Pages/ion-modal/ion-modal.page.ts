import { Component, Input } from '@angular/core';
import { ModalController} from '@ionic/angular';
//import { ModalPage } from '../modal/modal.page';


@Component({
  selector: 'app-ion-modal',
  templateUrl: './ion-modal.page.html',
  styleUrls: ['./ion-modal.page.scss'],
})
export class IonModalPage {

  constructor(public modalController: ModalController) {}
  @Input() public lunch: String ;

  public dinner ={
    maincourse: 'dinner rice-plate',
    desert: 'dinner jalebi'
  }

  public closeModal() {
    this.modalController.dismiss(this.dinner);
  }

  }  



import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular'; 
import {PopovercomponentPage} from '../popovercomponent/popovercomponent.page'

@Component({
  selector: 'app-ion-popover',
  templateUrl: './ion-popover.page.html',
  styleUrls: ['./ion-popover.page.scss'],
})
export class IonPopoverPage {



  constructor(private popover:PopoverController) 
  {
   }  
  CreatePopover()
  {
    this.popover.create({component:PopovercomponentPage,
    showBackdrop:false}).then((popoverElement)=>{
      popoverElement.present();
    })
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-datetime',
  templateUrl: './ion-datetime.page.html',
  styleUrls: ['./ion-datetime.page.scss'],
})
export class IonDatetimePage implements OnInit {

//  constructor() { }

  ngOnInit() {
  }
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['sun', 'mon', 'tue', 'wed', 'th', 'fri', 'sat'];
  customPickerOptions: any;

  constructor() {
    this.customPickerOptions = {
      buttons: [{
        text: 'DONE',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'CANCEL',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }
}

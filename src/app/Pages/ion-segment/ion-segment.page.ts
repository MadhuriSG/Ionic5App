import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-segment',
  templateUrl: './ion-segment.page.html',
  styleUrls: ['./ion-segment.page.scss'],
})
export class IonSegmentPage implements OnInit {
  segmentModel = "favorites";
  constructor() { }

  ngOnInit() {
  }
  segmentChanged(event){
    console.log(this.segmentModel);
    
    console.log(event);
  }
}

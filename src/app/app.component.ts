import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Ion-Action Sheet',
      url: 'action-sheet',
      icon: 'star'
    },
  
    {
      title: 'Ion-Alert',
      url: 'alert',
      icon: 'star'
    },
    {
      title: 'Ion-Button',
      url: 'button',
     // url: '/action-sheet',
      icon: 'star'
    },
    {
      title: 'Ion-Card',
      url: 'ion-card',
      icon: 'star'
    },
    {
      title: 'Ion-Checkbox',
      url: 'ion-checkbox',
      icon: 'star'
    },
    {
      title: 'Ion-Datetime',
      url: 'ion-datetime',
      icon: 'star'
    },
    {
      title: 'Ion-Grid',
      url: 'ion-grid',
      icon: 'star'
    },
    {
      title: 'Ion-Modal',
      url: 'secondpage',
      icon: 'star'
    },
    {
      title: 'Ion-Popover',
      url: 'ion-popover',
      icon: 'star'
    },
    {
      title: 'Ion-Loading',
      url: 'ion-loading',
      icon: 'star'
    },
    {
      title: 'Ion-Searchbar',
      url: 'ion-serach',
      icon: 'star'
    },
    {
      title: 'Ion-Radio',
      url: 'ion-radio',
      icon: 'star'
    },
    {
      title: 'Ion-Segment',
      url: 'ion-segment',
      icon: 'star'
    },
    {
      title: 'Ion-Slides',
      url: 'ion-slides',
      icon: 'star'
    }
  ];
  

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}

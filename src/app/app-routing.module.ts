import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./Pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./Pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./Pages/button/button.module').then( m => m.ButtonPageModule)
  },
  {
    path: 'ion-card',
    loadChildren: () => import('./Pages/ion-card/ion-card.module').then( m => m.IonCardPageModule)
  },
  {
    path: 'ion-checkbox',
    loadChildren: () => import('./Pages/ion-checkbox/ion-checkbox.module').then( m => m.IonCheckboxPageModule)
  },
  {
    path: 'ion-datetime',
    loadChildren: () => import('./Pages/ion-datetime/ion-datetime.module').then( m => m.IonDatetimePageModule)
  },
  {
    path: 'ion-grid',
    loadChildren: () => import('./Pages/ion-grid/ion-grid.module').then( m => m.IonGridPageModule)
  },
  {
    path: 'ion-modal',
    loadChildren: () => import('./Pages/ion-modal/ion-modal.module').then( m => m.IonModalPageModule)
  },
  {
    path: 'secondpage',
    loadChildren: () => import('./Pages/secondpage/secondpage.module').then( m => m.SecondpagePageModule)
  },
  {
    path: 'ion-popover',
    loadChildren: () => import('./Pages/ion-popover/ion-popover.module').then( m => m.IonPopoverPageModule)
  },
  {
    path: 'popovercomponent',
    loadChildren: () => import('./Pages/popovercomponent/popovercomponent.module').then( m => m.PopovercomponentPageModule)
  },
  {
    path: 'ion-loading',
    loadChildren: () => import('./Pages/ion-loading/ion-loading.module').then( m => m.IonLoadingPageModule)
  },
  {
    path: 'ion-serach',
    loadChildren: () => import('./Pages/ion-serach/ion-serach.module').then( m => m.IonSerachPageModule)
  },
  {
    path: 'ion-radio',
    loadChildren: () => import('./Pages/ion-radio/ion-radio.module').then( m => m.IonRadioPageModule)
  },
  {
    path: 'ion-segment',
    loadChildren: () => import('./Pages/ion-segment/ion-segment.module').then( m => m.IonSegmentPageModule)
  },
  {
    path: 'ion-slides',
    loadChildren: () => import('./Pages/ion-slides/ion-slides.module').then( m => m.IonSlidesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

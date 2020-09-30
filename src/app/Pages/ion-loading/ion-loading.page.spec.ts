import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonLoadingPage } from './ion-loading.page';

describe('IonLoadingPage', () => {
  let component: IonLoadingPage;
  let fixture: ComponentFixture<IonLoadingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonLoadingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonLoadingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

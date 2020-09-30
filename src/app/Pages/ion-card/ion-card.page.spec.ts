import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonCardPage } from './ion-card.page';

describe('IonCardPage', () => {
  let component: IonCardPage;
  let fixture: ComponentFixture<IonCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

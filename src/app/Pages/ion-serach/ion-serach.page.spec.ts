import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonSerachPage } from './ion-serach.page';

describe('IonSerachPage', () => {
  let component: IonSerachPage;
  let fixture: ComponentFixture<IonSerachPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonSerachPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonSerachPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

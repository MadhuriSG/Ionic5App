import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonGridPage } from './ion-grid.page';

describe('IonGridPage', () => {
  let component: IonGridPage;
  let fixture: ComponentFixture<IonGridPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonGridPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonGridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

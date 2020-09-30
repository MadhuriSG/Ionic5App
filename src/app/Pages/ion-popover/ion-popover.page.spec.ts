import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonPopoverPage } from './ion-popover.page';

describe('IonPopoverPage', () => {
  let component: IonPopoverPage;
  let fixture: ComponentFixture<IonPopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonPopoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

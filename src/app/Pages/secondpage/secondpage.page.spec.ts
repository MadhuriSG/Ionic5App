import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecondpagePage } from './secondpage.page';

describe('SecondpagePage', () => {
  let component: SecondpagePage;
  let fixture: ComponentFixture<SecondpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecondpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

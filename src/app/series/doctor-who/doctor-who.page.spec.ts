import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorWhoPage } from './doctor-who.page';

describe('DoctorWhoPage', () => {
  let component: DoctorWhoPage;
  let fixture: ComponentFixture<DoctorWhoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorWhoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorWhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

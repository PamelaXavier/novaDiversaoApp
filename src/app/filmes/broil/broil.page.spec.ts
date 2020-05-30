import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BroilPage } from './broil.page';

describe('BroilPage', () => {
  let component: BroilPage;
  let fixture: ComponentFixture<BroilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BroilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

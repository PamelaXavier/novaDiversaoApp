import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MadManPage } from './mad-man.page';

describe('MadManPage', () => {
  let component: MadManPage;
  let fixture: ComponentFixture<MadManPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadManPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MadManPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

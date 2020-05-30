import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SherlockPage } from './sherlock.page';

describe('SherlockPage', () => {
  let component: SherlockPage;
  let fixture: ComponentFixture<SherlockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SherlockPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SherlockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

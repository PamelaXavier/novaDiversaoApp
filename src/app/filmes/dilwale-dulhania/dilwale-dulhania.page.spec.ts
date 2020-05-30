import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DilwaleDulhaniaPage } from './dilwale-dulhania.page';

describe('DilwaleDulhaniaPage', () => {
  let component: DilwaleDulhaniaPage;
  let fixture: ComponentFixture<DilwaleDulhaniaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DilwaleDulhaniaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DilwaleDulhaniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

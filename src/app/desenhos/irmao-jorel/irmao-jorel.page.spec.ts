import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IrmaoJorelPage } from './irmao-jorel.page';

describe('IrmaoJorelPage', () => {
  let component: IrmaoJorelPage;
  let fixture: ComponentFixture<IrmaoJorelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrmaoJorelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IrmaoJorelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

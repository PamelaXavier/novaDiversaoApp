import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IrmaodoJorelPage } from './irmaodo-jorel.page';

describe('IrmaodoJorelPage', () => {
  let component: IrmaodoJorelPage;
  let fixture: ComponentFixture<IrmaodoJorelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrmaodoJorelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IrmaodoJorelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

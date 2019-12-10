import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IalumnoComponent } from './ialumno.component';

describe('IalumnoComponent', () => {
  let component: IalumnoComponent;
  let fixture: ComponentFixture<IalumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IalumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IalumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

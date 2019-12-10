import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IprofeComponent } from './iprofe.component';

describe('IprofeComponent', () => {
  let component: IprofeComponent;
  let fixture: ComponentFixture<IprofeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IprofeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IprofeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

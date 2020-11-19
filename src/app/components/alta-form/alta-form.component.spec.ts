import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaFormComponent } from './alta-form.component';

describe('AltaFormComponent', () => {
  let component: AltaFormComponent;
  let fixture: ComponentFixture<AltaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SesionStartedGuard } from './sesion-started.guard';

describe('SesionStartedGuard', () => {
  let guard: SesionStartedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SesionStartedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

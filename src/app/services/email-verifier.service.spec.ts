import { TestBed } from '@angular/core/testing';

import { EmailVerifierService } from './email-verifier.service';

describe('EmailVerifierService', () => {
  let service: EmailVerifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailVerifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

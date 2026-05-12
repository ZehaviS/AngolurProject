import { TestBed } from '@angular/core/testing';

import { Registrants } from './registrants';

describe('Registrants', () => {
  let service: Registrants;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Registrants);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

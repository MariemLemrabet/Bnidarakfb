import { TestBed } from '@angular/core/testing';

import { NousService } from './nous.service';

describe('NousService', () => {
  let service: NousService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NousService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

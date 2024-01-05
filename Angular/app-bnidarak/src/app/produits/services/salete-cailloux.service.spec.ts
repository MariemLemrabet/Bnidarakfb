import { TestBed } from '@angular/core/testing';

import { SaleteCaillouxService } from './salete-cailloux.service';

describe('SaleteCaillouxService', () => {
  let service: SaleteCaillouxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaleteCaillouxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

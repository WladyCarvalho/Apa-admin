import { TestBed } from '@angular/core/testing';

import { PreleitorService } from './preleitor.service';

describe('PreleitorService', () => {
  let service: PreleitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreleitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

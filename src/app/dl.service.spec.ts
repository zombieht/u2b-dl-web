import { TestBed, inject } from '@angular/core/testing';

import { DlService } from './dl.service';

describe('DlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DlService]
    });
  });

  it('should be created', inject([DlService], (service: DlService) => {
    expect(service).toBeTruthy();
  }));
});

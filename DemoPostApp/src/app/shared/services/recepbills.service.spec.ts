import { TestBed } from '@angular/core/testing';

import { RecepbillsService } from './recepbills.service';

describe('RecepbillsService', () => {
  let service: RecepbillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecepbillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

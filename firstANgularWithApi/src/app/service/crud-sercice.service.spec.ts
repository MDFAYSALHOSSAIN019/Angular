import { TestBed } from '@angular/core/testing';

import { CrudSerciceService } from './crud-sercice.service';

describe('CrudSerciceService', () => {
  let service: CrudSerciceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudSerciceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

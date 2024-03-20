import { TestBed } from '@angular/core/testing';

import { DepartmentService } from './departmentservice.service';

describe('DepartmentserviceService', () => {
  let service: DepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

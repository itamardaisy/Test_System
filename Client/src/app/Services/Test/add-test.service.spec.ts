import { TestBed } from '@angular/core/testing';

import { AddTestService } from './add-test.service';

describe('AddTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddTestService = TestBed.get(AddTestService);
    expect(service).toBeTruthy();
  });
});

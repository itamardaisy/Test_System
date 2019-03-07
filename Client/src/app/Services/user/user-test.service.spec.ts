import { TestBed } from '@angular/core/testing';

import { UserTestService } from './user-test.service';

describe('UserTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserTestService = TestBed.get(UserTestService);
    expect(service).toBeTruthy();
  });
});

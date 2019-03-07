import { TestBed } from '@angular/core/testing';

import { GetTemplatesService } from './get-templates.service';

describe('GetTemplatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetTemplatesService = TestBed.get(GetTemplatesService);
    expect(service).toBeTruthy();
  });
});

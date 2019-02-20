import { TestBed } from '@angular/core/testing';
import { AnswerService } from '../../Services/Answer/answer.service';

describe('AnswerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnswerService = TestBed.get(AnswerService);
    expect(service).toBeTruthy();
  });
});

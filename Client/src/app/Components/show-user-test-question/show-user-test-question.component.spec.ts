import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUserTestQuestionComponent } from './show-user-test-question.component';

describe('ShowUserTestQuestionComponent', () => {
  let component: ShowUserTestQuestionComponent;
  let fixture: ComponentFixture<ShowUserTestQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowUserTestQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUserTestQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTestQuestionComponent } from './user-test-question.component';

describe('UserTestQuestionComponent', () => {
  let component: UserTestQuestionComponent;
  let fixture: ComponentFixture<UserTestQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTestQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTestQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

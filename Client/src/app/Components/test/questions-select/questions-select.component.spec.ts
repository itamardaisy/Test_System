import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsSelectComponent } from './questions-select.component';

describe('QuestionsSelectComponent', () => {
  let component: QuestionsSelectComponent;
  let fixture: ComponentFixture<QuestionsSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

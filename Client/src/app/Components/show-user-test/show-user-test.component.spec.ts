import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUserTestComponent } from './show-user-test.component';

describe('ShowUserTestComponent', () => {
  let component: ShowUserTestComponent;
  let fixture: ComponentFixture<ShowUserTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowUserTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUserTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

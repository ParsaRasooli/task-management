import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasknavigationComponent } from './tasknavigation.component';

describe('TasknavigationComponent', () => {
  let component: TasknavigationComponent;
  let fixture: ComponentFixture<TasknavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasknavigationComponent]
    });
    fixture = TestBed.createComponent(TasknavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskcontainerComponent } from './taskcontainer.component';

describe('TaskcontainerComponent', () => {
  let component: TaskcontainerComponent;
  let fixture: ComponentFixture<TaskcontainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskcontainerComponent]
    });
    fixture = TestBed.createComponent(TaskcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

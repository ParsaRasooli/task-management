import { ViewportScroller } from '@angular/common';
import {
  Component,
  ViewChild,
  AfterViewInit,
  Injectable,
} from '@angular/core';
import {  Router } from '@angular/router';
import { TaskInfo } from 'src/app/model/Task';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

Injectable();
@Component({
  selector: 'app-tasknavigation',
  templateUrl: './tasknavigation.component.html',
  styleUrls: ['./tasknavigation.component.css'],
})
export class TasknavigationComponent implements AfterViewInit {
  tasks: TaskInfo[] = [];
  @ViewChild(CdkVirtualScrollViewport) viewPort: CdkVirtualScrollViewport;
  constructor(
    private taskservice: TaskServiceService,
    private scroller: ViewportScroller,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getTasks();
  }
  ngAfterViewInit(): void {}
  /**
   * receives all the tasks
   */
  getTasks() {
    this.taskservice.getAll().subscribe({
      next: (res) => {
        this.tasks = res;
      },
    });
  }
  /**
   * scroll into the desired task by id
   * @param height offset top
   */
  Scroll(height: number) {
    const scrollHeight = height + this.viewPort.measureScrollOffset();
    this.viewPort.scrollToOffset(height - 70, 'smooth');
  }
}

import { ViewportScroller } from '@angular/common';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  Injectable,
  ContentChild,
  AfterViewInit,
  OnChanges,
} from '@angular/core';
import { TaskInfo } from 'src/app/model/Task';
Injectable();
@Component({
  selector: 'app-taskinfo',
  templateUrl: './taskinfo.component.html',
  styleUrls: ['./taskinfo.component.css'],
})
export class TaskinfoComponent implements OnChanges {
  @Input() tasks: TaskInfo;

  constructor(public el: ElementRef) {}

  ngOnChanges() {}
}

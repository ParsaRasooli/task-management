import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
  OnInit,
  AfterViewInit,
  Injectable,
} from '@angular/core';
import { TaskinfoComponent } from '../taskinfo/taskinfo.component';
import { TasknavigationComponent } from '../tasknavigation.component';
import { NotificationService } from 'src/app/services/notification.service';
Injectable();
@Component({
  selector: 'app-taskcontainer',
  templateUrl: './taskcontainer.component.html',
  styleUrls: ['./taskcontainer.component.css'],
})
export class TaskcontainerComponent implements OnInit {
  @ContentChildren(TaskinfoComponent) tasks: QueryList<TaskinfoComponent>;
  searchValue: string = '';
  heightMap = new Map<number, number>();
  constructor(
    public tasknav: TasknavigationComponent,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    // console.log(
    //   this.tasks.filter(
    //     (Element, index) => Element.tasks.id === this.searchValue
    //   )
    // );
    // this.tasks.forEach((s) => console.log(s.tasks.id));
    // console.log(this.tasks.find((w) => w.tasks.id == 1)); //Q : why array is empty ?
    // console.log(this.tasks['_results'][this.searchValue]); //empty
    console.log(this.tasks.length);
    console.log(this.tasks);

    this.tasks.changes.subscribe((c) => {
      c.toArray().forEach((item) => {
        this.heightMap.set(
          item.tasks.id,
          item.el.nativeElement.getBoundingClientRect().top
        );
      });
    });
  }
  ngAfterViewInit() {}

  /** finds the task entered in searchbar */
  onSearchBtn() {
    if (this.heightMap.get(parseInt(this.searchValue)))
      this.tasknav.Scroll(this.heightMap.get(parseInt(this.searchValue)));
    else this.notification.error('task id does not exists !');
  }
}

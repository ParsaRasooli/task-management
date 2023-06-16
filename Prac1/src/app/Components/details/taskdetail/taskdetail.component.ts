import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef,
  ViewRef,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskInfo } from 'src/app/model/Task';
import { NotificationService } from 'src/app/services/notification.service';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-taskdetail',
  templateUrl: './taskdetail.component.html',
  styleUrls: ['./taskdetail.component.css'],
})
export class TaskdetailComponent implements OnInit {
  details: FormGroup;
  @Input() id: number;
  @Output() stats = new EventEmitter<string>();
  taskdata: TaskInfo;
  statusvalue: string;

  constructor(
    private taskserivce: TaskServiceService,
    private notif: NotificationService
  ) {}
  ngOnInit(): void {
    this.CreateForm(this.id);
  }

  Proccess() {
    this.stats.emit(this.statusvalue);
  }
  CreateForm(id: number) {
    this.taskserivce.getbyId(id).subscribe({
      next: (res) => {
        this.taskdata = res;
        switch (this.taskdata.status) {
          case 0:
            this.statusvalue = 'not started';
            break;
          case 1:
            this.statusvalue = 'in progress';
            break;
          case 2:
            this.statusvalue = 'Completed';
            break;
        }
        if (res.name != null) {
          this.details = new FormGroup({
            id: new FormControl(id),
            name: new FormControl(res.name),
            status: new FormControl(this.statusvalue),
            priority: new FormControl(res.priority),
          });
        }
      },
      error: (err) => {
        this.notif.error('id does not exists!');
      },
    });
  }
}

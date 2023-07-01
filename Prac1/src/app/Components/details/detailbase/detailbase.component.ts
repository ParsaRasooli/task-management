import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskInfo } from 'src/app/model/Task';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'detailbase',
  templateUrl: './detailbase.component.html',
  styleUrls: ['./detailbase.component.css'],
})
export class DetailbaseComponent implements OnInit {
  statustext: string;
  display: boolean;
  task: TaskInfo;
  detailbaseform: FormGroup;
  constructor(private taskservice: TaskServiceService) {}

  ngOnInit(): void {
    this.createForm(null);
  }
  /** Create/override the form */
  private createForm(id?: number) {
    this.detailbaseform = new FormGroup({
      id: new FormControl(id, [Validators.min(1), Validators.required]),
    });
  }
  /** Fetch task data */
  fetchTask() {
    this.task = this.detailbaseform.value;

    this.taskservice.getbyId(this.task.id).subscribe({
      next: (res) => {
        if (res.id == this.task.id) this.display = true;
        else this.display = false;
      },
    });
  }
  /**
   * gets value of status from other component
   */
  getStatusValue(newItem: string) {
    this.statustext = newItem.toString();
  }
  /**
   * hide details
   */
  hideDetails() {
    this.display = false;
  }
}

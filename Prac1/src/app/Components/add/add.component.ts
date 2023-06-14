import { Component, OnInit, Input, Injectable } from '@angular/core';
import { TaskServiceService } from '../../services/task-service.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { TaskInfo } from '../../model/Task';
import { MatCheckbox } from '@angular/material/checkbox';
import { NotificationService } from '../../services/notification.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [TaskServiceService, NotificationService],
})
export class AddComponent implements OnInit {
  constructor(
    private taskservice: TaskServiceService,
    private notif: NotificationService,
    private toast: ToastrService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) {}
  _id: number;
  addtask: FormGroup;

  edit;

  ngOnInit(): void {
    this.edit = false;
    // this._id = parseInt(this.activatedroute.snapshot.paramMap.get('id'));
    this.activatedroute.queryParams.subscribe((params) => {
      this._id = params['id'];
    });

    this.createform(0, '', null, null);

    if (this._id > 0) {
      this.edit = true;
      this.taskservice.getbyId(this._id).subscribe({
        next: (res) => {
          this.createform(res.id, res.name, res.status, res.priority);
        },

        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  onSubmit(): void {
    const task: TaskInfo = this.addtask.value;
    console.log(this.addtask.value);

    if (this.edit) {
      console.log(this._id);
      this.taskservice.update(this._id, task).subscribe({
        next: (res) => {
          this.notif.Succsess('task edited successfully');
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.toast.error(err);
        },
      });
    } else {
      if (this.addtask.valid) {
        this.taskservice.add(task).subscribe({
          next: (res) => {
            this.notif.Succsess('task added successfully');
            this.router.navigate(['/']);
          },
          error: (err) => {
            this.toast.error(err);
          },
        });
      }
    }
  }
  createform(id: number, name: string, status: number, priority: number) {
    this.addtask = new FormGroup({
      id: new FormControl(id, [Validators.required]),
      name: new FormControl(name, [Validators.required]),
      status: new FormControl(status, [Validators.required]),
      priority: new FormControl(priority, [
        Validators.min(1),
        Validators.max(10),
        Validators.required,
      ]),
    });
  }
}

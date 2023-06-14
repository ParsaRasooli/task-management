import {
  Component,
  Inject,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Injectable, Injector } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { ErrorStateMatcher, MatOptionModule } from '@angular/material/core';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import {
  TaskServiceService,
  taskserviceinj,
} from '../../services/task-service.service';
import { NotificationService } from '../../services/notification.service';
import { MainComponent, maincm } from '../main/main.component';
import { inject } from '@angular/core/testing';
import { TaskInfo } from '../../model/Task';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-edit-add',
  templateUrl: './edit-add.component.html',
  styleUrls: ['./edit-add.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgIf,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule,
    MatSnackBarModule,
  ],
})
export class EditAddComponent implements OnInit {
  constructor(
    private router: Router,
    private injector: Injector,
    @Inject(MAT_DIALOG_DATA) public taskdata,
    private taskserive: TaskServiceService,
    private ref: MatDialogRef<EditAddComponent>,
    private notif: NotificationService,
    private snack: MatSnackBar
  ) {
    taskserviceinj.taskserviceinjetor = injector;
  }
  taskinfodata: TaskInfo;
  TaskFormControl: FormGroup;
  ngOnInit(): void {
    this.createform(0, null, null, null);
    if (this.taskdata.id > 0) {
      this.taskserive.getbyId(this.taskdata.id).subscribe({
        next: (res) => {
          this.createform(res.id, res.name, res.status, res.priority);
        },
        error: (err) => {},
      });
    } else {
      this.createform(0, null, null, null);
    }
  }

  matcher = new ErrorStateMatcher();
  //Save values in table
  Save() {
    if (this.TaskFormControl.valid)
      this.taskserive.add(this.TaskFormControl.value).subscribe({
        next: (res) => {
          this.notif.Succsess('task has been added successfully!');
          this.ref.close();
        },
        error: (err) => {},
      });
  }
  //Form creation
  createform(id: number, name: string, status: number, priority: number) {
    this.TaskFormControl = new FormGroup({
      id: new FormControl(id),
      name: new FormControl(name, [Validators.required]),
      status: new FormControl(status, [Validators.required]),
      priority: new FormControl(priority, [
        Validators.min(1),
        Validators.max(10),
        Validators.required,
      ]),
    });
  }
  //edit table values
  Update() {
    this.taskserive
      .update(this.taskdata.id, this.TaskFormControl.value)
      .subscribe({
        next: (res) => {
          console.log(res);
          console.log(this.taskdata.id);
          // this.notif.Succsess('task has been updated successfully!');
          this.snack.open('Task has been updated successfully!', 'close');
          this.ref.close('sup');
        },
        error: (err) => {},
      });
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskdetailComponent } from './taskdetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [TaskdetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [TaskdetailComponent],
})
export class TaskdetailModule {}

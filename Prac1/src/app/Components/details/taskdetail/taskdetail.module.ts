import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskdetailComponent } from './taskdetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [TaskdetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [TaskdetailComponent],
})
export class TaskdetailModule {}

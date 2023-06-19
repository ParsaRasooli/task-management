import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskSelectorComponent } from './task-selector.component';
import { GridComponent } from './grid/grid.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [TaskSelectorComponent, GridComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatCheckboxModule,
    MatSortModule,
    RouterModule,
    MatDialogModule,
    MatBadgeModule,
    MatInputModule,
  ],
  exports: [TaskSelectorComponent],
})
export class TaskSelectorModule {}

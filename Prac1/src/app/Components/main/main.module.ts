import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { RouterModule } from '@angular/router';

import { AppModule } from '../../app.module';
import { EditAddComponent } from '../edit-add/edit-add.component';
import { MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { TaskSelectorComponent } from '../task-selector/task-selector.component';
import { TaskSelectorModule } from '../task-selector/task-selector.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatCheckboxModule,
    MatSortModule,
    RouterModule,
    MatDialogModule,
    MatBadgeModule,
    TaskSelectorModule,
  ],
})
export class MainModule {}

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MaterialModule } from 'src/app/material/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
<<<<<<< HEAD
<<<<<<< Updated upstream
import { MaterialModule } from '../../material/material.module';
=======
import { UppercasePipe } from 'src/app/pipes/uppercase.pipe';
import { HoverSpanDirective } from 'src/app/directives/hover-span.directive';
>>>>>>> Stashed changes
=======
>>>>>>> parent of 8e4e798 (final)

@NgModule({
  declarations: [MainComponent, EditAddComponent],
  imports: [
    CommonModule,
    RouterModule,
    TaskSelectorModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    AppModule,
  ],
})
export class MainModule {}

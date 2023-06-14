import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AddComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule],
  exports: [AddComponent],
})
export class AddModule {}

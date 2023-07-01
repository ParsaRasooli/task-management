import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AddComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule],
  exports: [AddComponent],
})
export class AddModule {}

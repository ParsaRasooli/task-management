import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailbaseComponent } from './detailbase.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { TaskdetailModule } from '../taskdetail/taskdetail.module';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DetailbaseComponent],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    TaskdetailModule,
    MatButtonModule,
  ],
  exports: [DetailbaseComponent],
})
export class DetailbaseModule {}

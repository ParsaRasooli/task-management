import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from '../details.component';
import { DetailbaseComponent } from './detailbase.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskdetailComponent } from '../taskdetail/taskdetail.component';
import { DetailsModule } from '../details.module';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TaskdetailModule } from '../taskdetail/taskdetail.module';

@NgModule({
  declarations: [DetailbaseComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    TaskdetailModule,
  ],
  exports: [DetailbaseComponent],
})
export class DetailbaseModule {}

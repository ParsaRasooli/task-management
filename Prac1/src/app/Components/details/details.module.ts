import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from 'src/app/material/material.module';
import { DetailbaseComponent } from './detailbase/detailbase.component';
import { TaskdetailComponent } from './taskdetail/taskdetail.component';
import { DetailbaseModule } from './detailbase/detailbase.module';
import { DetailsComponent } from './details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    DetailbaseModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [DetailsComponent],
})
export class DetailsModule {}

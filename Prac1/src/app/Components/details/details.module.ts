import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailbaseModule } from './detailbase/detailbase.module';
import { DetailsComponent } from './details.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [DetailsComponent],
  imports: [DetailsRoutingModule, DetailbaseModule, MaterialModule],
  exports: [DetailsComponent],
})
export class DetailsModule {}

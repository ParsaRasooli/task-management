import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TasknavigationRoutingModule } from './tasknavigation-routing.module';
import { TasknavigationComponent } from './tasknavigation.component';
import { TaskinfoComponent } from './taskinfo/taskinfo.component';

import { StatusPipe } from 'src/app/pipes/status.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TaskcontainerComponent } from './taskcontainer/taskcontainer.component';
import {MatCardModule} from '@angular/material/card';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [
    TasknavigationComponent,
    TaskinfoComponent,
    StatusPipe,
    TaskcontainerComponent,
    
  ],
  imports: [
    CommonModule,
    TasknavigationRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    ScrollingModule,
    MatCardModule,
    SharedModule
  ],
  exports: [TaskinfoComponent],
  providers: [TaskinfoComponent, TaskcontainerComponent],
})
export class TasknavigationModule {}

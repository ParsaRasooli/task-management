import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { AppModule } from '../../app.module';
import { EditAddComponent } from '../edit-add/edit-add.component';
import { TaskSelectorModule } from '../task-selector/task-selector.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PriorityPipe } from 'src/app/pipes/priority.pipe';
import { UppercaseDirective } from 'src/app/directives/uppercase.directive';
import { HoverSpanDirective } from 'src/app/directives/hover-span.directive';

@NgModule({
  declarations: [
    MainComponent,
    EditAddComponent,
    HoverSpanDirective,
    UppercaseDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TaskSelectorModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,

    BrowserAnimationsModule,
  ],
  providers: [MainComponent],
})
export class MainModule {}

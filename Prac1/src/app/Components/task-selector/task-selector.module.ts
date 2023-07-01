import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskSelectorComponent } from './task-selector.component';
import { GridComponent } from './grid/grid.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material/material.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [TaskSelectorComponent, GridComponent],
  imports: [MaterialModule, RouterModule, BrowserModule],
  exports: [TaskSelectorComponent],
})
export class TaskSelectorModule {}

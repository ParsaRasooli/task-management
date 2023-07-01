import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasknavigationComponent } from './tasknavigation.component';

const routes: Routes = [{ path: '', component: TasknavigationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasknavigationRoutingModule {}

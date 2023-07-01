import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { AddComponent } from './Components/add/add.component';
import { DetailsComponent } from './Components/details/details.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'add',
    loadChildren: () =>
      import('./Components/add/add.module').then((m) => m.AddModule),
  },
  {
    path: 'details',
    loadChildren: () =>
      import('./Components/details/details.module').then(
        (m) => m.DetailsModule
      ),
  },
  {
    path: 'navigation',
    loadChildren: () =>
      import('./Components/tasknavigation/tasknavigation.module').then(
        (m) => m.TasknavigationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

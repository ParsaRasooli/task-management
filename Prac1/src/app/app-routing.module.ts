import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { AddComponent } from './Components/add/add.component';
import { DetailsComponent } from './Components/details/details.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'add', component: AddComponent },
  { path: 'details', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

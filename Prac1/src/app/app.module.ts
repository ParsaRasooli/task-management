import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Components/main/main.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddComponent } from './Components/add/add.component';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule, matSortAnimations } from '@angular/material/sort';
import { MainModule } from './Components/main/main.module';
import { AddModule } from './Components/add/add.module';
import {
  NotificationService,
  Notifservice,
} from './services/notification.service';
import { EditAddComponent } from './Components/edit-add/edit-add.component';

import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MaterialModule } from './material/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TaskServiceService } from './services/task-service.service';
import { HeadersInterceptor } from './interceptor/headers.interceptor';
import { MatBadgeModule } from '@angular/material/badge';
import { TaskSelectorComponent } from './Components/task-selector/task-selector.component';
import { RouterModule } from '@angular/router';
import { GridComponent } from './Components/task-selector/grid/grid.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule,
  ],

  providers: [
    TaskServiceService,
    NotificationService,
    MainComponent,

    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

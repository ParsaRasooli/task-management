import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from './Components/main/main.module';
import { AddModule } from './Components/add/add.module';
import { NotificationService } from './services/notification.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from './material/material.module';
import { TaskServiceService } from './services/task-service.service';
import { HeadersInterceptor } from './interceptor/headers.interceptor';
import { RouterModule } from '@angular/router';

import { HoverSpanDirective } from './directives/hover-span.directive';

import { UppercaseDirective } from './directives/uppercase.directive';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { PriorityPipe } from './pipes/priority.pipe';
import { TaskinfoComponent } from './Components/tasknavigation/taskinfo/taskinfo.component';
import { TasknavigationComponent } from './Components/tasknavigation/tasknavigation.component';
import { StatusPipe } from './pipes/status.pipe';

@NgModule({
  declarations: [AppComponent, UppercasePipe],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
    FormsModule,
  ],

  exports: [],

  providers: [
    TaskServiceService,
    NotificationService,

    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

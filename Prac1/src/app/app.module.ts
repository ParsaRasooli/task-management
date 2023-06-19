import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Components/main/main.component';
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

import { GridComponent } from './Components/task-selector/grid/grid.component';
import { MatInputModule } from '@angular/material/input';
import { DetailsModule } from './Components/details/details.module';
import { DetailbaseModule } from './Components/details/detailbase/detailbase.module';
import { DetailbaseComponent } from './Components/details/detailbase/detailbase.component';
import { MatOptionModule } from '@angular/material/core';
import { HoverSpanDirective } from './directives/hover-span.directive';

import { UppercaseDirective } from './directives/uppercase.directive';
import { UppercasePipe } from './pipes/uppercase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UppercasePipe,
    HoverSpanDirective,
    UppercaseDirective,
  ],

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

  exports: [HoverSpanDirective, UppercaseDirective],

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

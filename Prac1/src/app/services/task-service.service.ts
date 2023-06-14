import { Injectable, Injector } from '@angular/core';
import { TaskInfo } from '../model/Task';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { enviromnet } from 'src/enviroments/enviroment';
import { NotificationService, Notifservice } from './notification.service';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core/testing';

export class taskserviceinj {
  static taskserviceinjetor: Injector;
}
@Injectable()
export class TaskServiceService {
  Task: TaskInfo[];
  notificationService: NotificationService;
  constructor(
    private http: HttpClient,
    private injector: Injector,
    private notif: NotificationService
  ) {
    Notifservice.notifinjector = injector;
  }

  getAll(): Observable<TaskInfo> {
    return this.http
      .get<TaskInfo>(`${enviromnet.ApiUrl}/api/task`)
      .pipe(catchError(this.handleError));
  }

  getbyId(id: number): Observable<TaskInfo> {
    return this.http.get<TaskInfo>(`${enviromnet.ApiUrl}/api/Task/${id}`);
  }

  add(model: TaskInfo): Observable<TaskInfo[]> {
    let httpOptions = {
      headers: new HttpHeaders(),
    };
    httpOptions.headers = httpOptions.headers.append(
      'Content-Type',
      'application/json'
    );

    const modeljson = JSON.stringify(model);

    return this.http
      .post<TaskInfo[]>('http://localhost:52761/api/Task', model, httpOptions)
      .pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<TaskInfo> {
    return this.http
      .delete<TaskInfo>(`${enviromnet.ApiUrl}/api/Task/${id}`)
      .pipe(catchError(this.handleError));
  }

  update(id: number, body: any): Observable<TaskInfo> {
    console.log(id);
    return this.http
      .put<TaskInfo>(`${enviromnet.ApiUrl}/api/Task/${id}`, body)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    let err;
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      const notificationService =
        Notifservice.notifinjector.get(NotificationService);
      notificationService.error(error.error.messages[0]);
    }

    return throwError(() => new Error(error.error));
  }
}

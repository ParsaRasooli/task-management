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
  $tasks = this.getAll();
  /**
   * get all tasks
   */
  getAll(): Observable<TaskInfo[]> {
    return this.http
      .get<TaskInfo[]>(`${enviromnet.ApiUrl}/api/task`)
      .pipe(catchError(this.handleError));
  }
  /**
   * 
   * @param id taskId is required 
   * @returns Task object
   */
  getbyId(id: number): Observable<TaskInfo> {
    return this.http
      .get<TaskInfo>(`${enviromnet.ApiUrl}/api/Task/${id}`)
      .pipe(catchError(this.handleError));
  }
/**
 * 
 * @param single task
 * @returns 
 */
  add(task: TaskInfo): Observable<TaskInfo[]> {
    let httpOptions = {
      headers: new HttpHeaders(),
    };
    httpOptions.headers = httpOptions.headers.append(
      'Content-Type',
      'application/json'
    );

    return this.http
      .post<TaskInfo[]>(`${enviromnet.ApiUrl}/api/Task/`, task, httpOptions)
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
    const notificationService =
      Notifservice.notifinjector.get(NotificationService);
    if (error.status === 0) {
      notificationService.error(error.error.messages[0]);
    } else {
      notificationService.error(error.error.messages[0]);
    }

    return throwError(() => new Error(error.error));
  }
}

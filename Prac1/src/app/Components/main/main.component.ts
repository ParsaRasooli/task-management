import {
  Component,
  Injectable,
  Injector,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {
  TaskServiceService,
  taskserviceinj,
} from '../../services/task-service.service';
import { TaskInfo } from '../../model/Task';
import { ActivatedRoute, Data, Route, Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { MatSort, Sort } from '@angular/material/sort';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditAddComponent } from '../edit-add/edit-add.component';
import { BehaviorSubject, switchMap } from 'rxjs';
import { GridComponent } from '../task-selector/grid/grid.component';
import { compileComponentFromMetadata } from '@angular/compiler';
import { HoverSpanDirective } from 'src/app/directives/hover-span.directive';

export class maincm {
  static maincminjector: Injector;
}

Injectable();
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [TaskServiceService, NotificationService],
})
export class MainComponent implements OnInit {
  constructor(
    private taskservice: TaskServiceService,
    private router: Router,
    private notif: NotificationService,
    private matdialog: MatDialog
  ) {}

  editting: number = 0;
  Editable: boolean = false;
  _name: string;
  _priority: number;
  _status: Number;
  dataSoruce: MatTableDataSource<TaskInfo>;
  taskdata: TaskInfo;
  _id: number;

  ngOnInit(): void {
    this.refreshGrid();
  }
  displayedColumns: string[] = [
    'select',
    'id',
    'name',
    'status',
    'priority',
    'action',
  ];

  selection = new SelectionModel<TaskInfo>(true, []);
  /**
   * checks if all rows are selected
   */
  isAllSelected() {
    const numSelected = this.selection.selected.length;

    const numRows = this.dataSoruce.data.length;

    return numSelected === numRows;
  }
  /**
   * clear or select all rows checkboxes
   */
  toggleAllRows() {
    if (this.dataSoruce.data != undefined)
      if (this.isAllSelected()) {
        this.selection.clear();
        return;
      }

    this.selection.select(...this.dataSoruce.data);
  }
  /**
   * check indevisual checkboxes
   */

  checkboxLabel(row?: TaskInfo): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.id + 1
    }`;
  }
  /** edit button => /add route */
  editTaskBtn(): void {
    this.getRowData();
    if (this.selection.selected.length === 1) {
      this.router.navigate(['add'], { queryParams: { id: this._id } });

      this.selection.selected.filter((obj) => {});
    } else {
      this.notif.error('you need to select a row in order to edit');
    }
  }
  /**
   * delete selected rows
   */
  deleteRow(): void {
    if (this.selection.selected.length > 0) {
      this.selection.selected.filter((obj) => {
        this.taskservice.delete(obj.id).subscribe({
          next: (res) => {
            this.refreshGrid();
            this.notif.Succsess('row has been deleted successfully');
          },
        });
      });
    } else {
      this.notif.error('you need to select a row in order to delete it');
    }
  }
  /**
   * receive seleted row data
   */
  getRowData(): void {
    this.selection.selected.filter((obj) => {
      this._id = obj.id;
      this._name = obj.name;
      this._status = obj.status;
      this._priority = obj.priority;
    });
  }
  /**
   * refresh the table / grid
   */
  refreshGrid(): void {
    this.taskservice.getAll().subscribe({
      next: (res) => {
        this.selection = new SelectionModel<TaskInfo>(true, []);
        this.dataSoruce = new MatTableDataSource<TaskInfo>(res);
      },
      error: (err) => {},
    });
  }
  /**
   * opens edit-add dialog component
   */
  openDialogEditAdd() {
    var title = '';
    this.getRowData();
    var id = this._id;

    if (this.selection.selected.length > 0) {
      title = 'edit task';
      let popup = this.matdialog.open(EditAddComponent, {
        width: '350px',
        height: '520px',
        disableClose: true,
        panelClass: 'custom-container',
        data: { title, id },
      });
      popup.afterClosed().subscribe((item) => {
        this.refreshGrid();
      });
    } else {
      title = 'add task';
      let popup = this.matdialog.open(EditAddComponent, {
        width: '350px',
        height: '520px',
        enterAnimationDuration: '350ms',
        exitAnimationDuration: '200ms',
        disableClose: true,
        panelClass: 'custom-container',
        data: { title },
      });
      popup.afterClosed().subscribe((item) => {
        this.refreshGrid();
      });
    }
  }
  /**
   * checks if delete button badge shows or not
   */
  delBtnBadge() {
    return this.selection.selected.length > 0 ? false : true;
  }
  /**
   * navigates to /details route
   */
  detailsBtn() {
    this.router.navigate(['/details']);
  }
  /**
   * activate inline editing on table
   */
  inlineEditmode(item) {
    item.isedit = true;
    this.Editable = true;
  }
  /**
   * delete a row
   */
  inlineDelete(item) {
    this.taskservice.delete(item.id).subscribe({
      next: (res) => {
        this.notif.Succsess('task has been deleted !');
        this.refreshGrid();
      },
    });
  }
  /**
   * cancel inline editing
   */
  inlineCancel(item) {
    this.taskservice.getbyId(item.id).subscribe({
      next: (res) => {
        item.priority = res.priority;
        item.status = res.status;
        item.name = res.name;
        item.isedit = false;
        this.Editable = false;
      },
    });
  }
  /**
   * update the changes on table
   */
  inlineSave(item) {
    if (item.priority > 10) this.notif.error('max value for priority is 10!');
    else
      this.taskservice.update(item.id, item).subscribe({
        next: (res) => {
          item.isedit = false;
          this.Editable = false;
        },
      });
  }
}

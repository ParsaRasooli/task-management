import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TaskServiceService } from '../services/task-service.service';
import { TaskInfo } from '../model/Task';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { MatSort, Sort } from '@angular/material/sort';

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
    private _router: ActivatedRoute
  ) {}

  _name: string;
  _priority: number;
  _status: Number;
  dataSoruce: MatTableDataSource<TaskInfo>;

  _id: number;
  data: any;

  ngOnInit(): void {
    this.refreshGrid();
  }

  displayedColumns: string[] = ['select', 'id', 'name', 'status', 'priority'];

  selection = new SelectionModel<TaskInfo>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;

    const numRows = this.dataSoruce.data.length;

    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.dataSoruce.data != undefined)
      if (this.isAllSelected()) {
        this.selection.clear();
        return;
      }

    this.selection.select(...this.dataSoruce.data);
  }

  checkboxLabel(row?: TaskInfo): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.id + 1
    }`;
  }
  editbut(): void {
    this.getrowdata();
    if (this.selection.selected.length === 1) {
      this.router.navigate(['add'], { queryParams: { id: this._id } });

      this.selection.selected.filter((obj) => {});
    } else {
      this.notif.error('you need to select a row in order to edit');
    }
  }
  deleterow(): void {
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
  getrowdata(): void {
    this.selection.selected.filter((obj) => {
      this._id = obj.id;
      this._name = obj.name;
      this._status = obj.status;
      this._priority = obj.priority;
    });
  }
  refreshGrid(): void {
    this.taskservice.getAll().subscribe({
      next: (res) => {
        this.data = res;
        this.selection = new SelectionModel<TaskInfo>(true, []);
        this.dataSoruce = new MatTableDataSource<TaskInfo>(this.data);
      },
    });
  }
}

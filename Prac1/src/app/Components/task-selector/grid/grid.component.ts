import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TaskInfo } from 'src/app/model/Task';
import { NotificationService } from 'src/app/services/notification.service';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  tabledata;
  local_data;
  action: string;
  taskselected: TaskInfo[];
  displayedColumns: string[] = ['select', 'id', 'name', 'status', 'priority'];
  dataSoruce: MatTableDataSource<TaskInfo>;
  selection = new SelectionModel<TaskInfo>(true, []);

  constructor(
    private taskdata: TaskServiceService,
    private ref: MatDialogRef<GridComponent>,
    private notif: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: TaskInfo
  ) {}
  ngOnInit(): void {
    this.getTableData();
  }

  getTableData() {
    this.taskdata.getAll().subscribe({
      next: (res) => {
        this.tabledata = res;
        this.selection = new SelectionModel<TaskInfo>(true, []);
        this.dataSoruce = new MatTableDataSource<TaskInfo>(this.tabledata);
      },
      error: (err) => {},
    });
  }

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
  submit() {
    if (this.selection.selected.length > 1) {
      this.notif.error('you can only edit 1 task at a time!');
    } else {
      this.notif.Succsess('subbed!');
      this.taskselected = this.selection.selected;
      this.ref.close(this.taskselected);
    }
  }
}

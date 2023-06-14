import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { GridComponent } from './grid/grid.component';
import { TaskInfo } from 'src/app/model/Task';
import { FormControl, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-task-selector',
  templateUrl: './task-selector.component.html',
  styleUrls: ['./task-selector.component.css'],
})
export class TaskSelectorComponent implements OnInit {
  @ViewChild('inputdata') inputtext;
  constructor(private dialog: MatDialog) {}
  data: TaskInfo[];
  test: string = 'parsa';
  datagrid: FormGroup;

  ngOnInit(): void {
    this.datagrid = new FormGroup({ grid: new FormControl('what') });
  }

  OpenGrid() {
    const griddialog = this.dialog
      .open(GridComponent, {
        width: '80%',
        height: '80%',
        enterAnimationDuration: '500ms',

        data: 'sda',
      })
      .afterClosed()
      .subscribe((res) => {
        this.data = res;
        if (res != undefined)
          this.inputtext.nativeElement.value = `id : ${this.data[0].id} name : ${this.data[0].name}`;
      });
  }
}

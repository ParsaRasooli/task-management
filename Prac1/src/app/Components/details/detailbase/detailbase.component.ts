import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskInfo } from 'src/app/model/Task';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-detailbase',
  templateUrl: './detailbase.component.html',
  styleUrls: ['./detailbase.component.css'],
})
export class DetailbaseComponent implements OnInit {
  statustext: string;
  display: boolean;
  id: TaskInfo;
  detailbaseform: FormGroup;
  constructor(private taskservice: TaskServiceService) {}

  ngOnInit(): void {
    this.Form(null);
  }
  Form(id?: number) {
    this.detailbaseform = new FormGroup({
      id: new FormControl(id, [Validators.min(1), Validators.required]),
    });
  }
  fetch() {
    this.id = this.detailbaseform.value;

    this.taskservice.getbyId(this.id.id).subscribe({
      next: (res) => {
        if (res.id == this.id.id) this.display = true;
        else this.display = false;
      },
    });
  }
  add(newItem: string) {
    this.statustext = newItem.toString();
  }
  change() {
    this.display = false;
  }
}

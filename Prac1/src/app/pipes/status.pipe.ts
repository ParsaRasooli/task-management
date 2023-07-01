import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
})
/** this pipe  will return string according to the number entered */
export class StatusPipe implements PipeTransform {
  statuslabel = new Map<number, string>();
  transform(value: number, ...args: unknown[]): unknown {
    this.statuslabel.set(0, 'not started');
    this.statuslabel.set(1, 'in progress');
    this.statuslabel.set(2, 'completed');
    return this.statuslabel.get(value) ? this.statuslabel.get(value) : '';
  }
}

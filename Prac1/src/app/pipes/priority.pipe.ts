import { Directionality } from '@angular/cdk/bidi';
import { NgSwitchCase } from '@angular/common';
import { MapType } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priority',
})
export class PriorityPipe implements PipeTransform {
  prioritylabel = new Map<number, string>();
  transform(value: number, ...args: unknown[]): unknown {
    this.prioritylabel.set(1, 'Verylow');
    this.prioritylabel.set(2, 'Low');
    this.prioritylabel.set(3, 'Medium');
    this.prioritylabel.set(4, 'High');
    this.prioritylabel.set(5, 'Veryhigh');
    if (this.prioritylabel.get(value)) return this.prioritylabel.get(value);

    return value;
  }
}

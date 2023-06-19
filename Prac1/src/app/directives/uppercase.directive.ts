import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appUppercase]',
})
export class UppercaseDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  //this code has a delay switching to uppercase

  // @HostListener('keyup', ['$event']) onkeydown() {
  //   const value = this.el.nativeElement.value.toUpperCase();
  //   this.el.nativeElement.value = value;
  //   this.renderer.setProperty(this.el.nativeElement, 'value', value);
  //   console.log(value);
  // }

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.toUpperCase();
  }
}

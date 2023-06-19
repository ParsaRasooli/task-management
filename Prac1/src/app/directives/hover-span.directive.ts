import {
  Directive,
  ElementRef,
  HostListener,
  RendererStyleFlags2,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: 'span',
})
export class HoverSpanDirective implements OnInit {
  constructor(private el: ElementRef) {}
  ngOnInit(): void {}

  @HostListener('mouseenter') onMouseEnter() {
    this.hover('green');
  }
  @HostListener('mouseleave') onMouseLeave() {
    // let elemet = this.el.nativeElement;
    // elemet.setAttribute('Span', 'color', 'green');
    this.hover('');
  }
  hover(color: string) {
    this.el.nativeElement.style.color = color;
  }
}

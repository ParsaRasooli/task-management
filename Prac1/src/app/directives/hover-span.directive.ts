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
    this.hover('');
  }
  /**
   * changes the element color to desired color
   * @param color
   */
  hover(color: string) {
    this.el.nativeElement.style.color = color;
  }
}

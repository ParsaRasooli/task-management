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

  /**make text green on mouseenter event */
  @HostListener('mouseenter') onMouseEnter() {
    this.hover('green');
  }
  /**make text defualt color on mouseleave event */
  @HostListener('mouseleave') onMouseLeave() {
    this.hover('');
  }
  hover(color: string) {
    this.el.nativeElement.style.color = color;
  }
}

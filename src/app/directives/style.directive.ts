import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color = 'blue';
  @Input() fontWeight = 'normal';
  @Input() dStyle!: { border: string, borderRadius: string };

  @HostBinding('style.color') elColor!: string;

  constructor(private elRef: ElementRef, private render: Renderer2) {
    this.render.setStyle(elRef.nativeElement, 'color', this.color);
    // elRef.nativeElement.style.color = 'red';
  }

  @HostListener('click', ['$event.target']) onClick(event: Event): void {
  }

  @HostListener('mouseenter', ['$event.target']) onEnter(event: Event): void {
    this.elColor = this.color;
    this.elRef.nativeElement.style.fontWeight = this.fontWeight;
    this.elRef.nativeElement.style.borderRadius = this.dStyle.borderRadius;
    this.elRef.nativeElement.style.border = this.dStyle.border;

  }
}

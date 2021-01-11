import {Directive, ElementRef, HostBinding, OnInit} from '@angular/core';
import {reduce} from 'rxjs/operators';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {
  @HostBinding('style.color') color!: string;

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'red';
  }

  ngOnInit(): void {
    this.color = '#aaa';
  }
}

import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {
  title = '';
  arr: number[] = [];

  constructor(private cf: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    setInterval(() => {
      this.arr = [Math.random()];
      //this.cf.markForCheck();
      //this.cf.detectChanges();

    }, 113000);
  }

  parent(): string {
    console.log('Parent');
    return 'Parent';
  }
}

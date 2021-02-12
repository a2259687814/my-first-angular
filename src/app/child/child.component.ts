import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  @Input() arr: number[] = [];
  title = 0;

  constructor(private cf: ChangeDetectorRef) {
      //this.cf.detach();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.title = Math.random();
      //this.cf.markForCheck();
      //this.cf.detectChanges();
    }, 3000);
  }

  child(): string {
    console.log('Child');
    return 'Child';
  }
}

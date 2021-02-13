import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgZone, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  @Input() arr: number[] = [];
  title = 0;

  constructor(private cf: ChangeDetectorRef, private zone: NgZone) {
    // this.cf.detach();
  }

  // ngOnInit(): void {
  //   setInterval(() => {
  //     this.title = Math.random();
  //     //this.cf.markForCheck();
  //     //this.cf.detectChanges();
  //   }, 3000);
  // }

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        this.title = Math.random();
      }, 1000);
    });

  }


  child(): string {
    console.log('Child');
    return 'Child';
  }
}

import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, NgZone, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  @Input() arr: number[] = [];

  @Output() onAdd: EventEmitter<boolean> = new EventEmitter<boolean>();


  title = 0;

  constructor(private cf: ChangeDetectorRef, private zone: NgZone) {
    // this.cf.detach();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.title = Math.random();
      this.onAdd.emit(true);
      // this.cf.markForCheck();
      //this.cf.detectChanges();
    }, 21000);
  }

  // ngOnInit(): void {
  //   this.zone.runOutsideAngular(() => {
  //     setInterval(() => {
  //       this.title = Math.random();
  //
  //     }, 1000);
  //   });
  // }

  // ngOnInit(): void {
  //   this.cf.detach();
  //   this.zone.run(() => {
  //     setInterval(() => {
  //       this.title = Math.random();
  //     }, 1000);
  //   });
  // }


  child(): string {
    console.log('Child');
    return 'Child';
  }

  vasea(): void {
    // this.onAdd.emit(true);
  }
}

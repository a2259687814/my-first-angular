import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  title = '';

  constructor() {
  }

  ngOnInit(): void {
    console.log('child onInit');
  }

  child(): string {
    console.log('Child');
    return 'Child';
  }
}

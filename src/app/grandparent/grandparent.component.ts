import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-grandparent',
  templateUrl: './grandparent.component.html',
  styleUrls: ['./grandparent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandparentComponent implements OnInit {
  title = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  grandParent(): string {
    console.log('GrandParent');
    return 'GrandParent';
  }

}

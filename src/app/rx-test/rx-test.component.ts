import {Component, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-rx-test',
  templateUrl: './rx-test.component.html',
  styleUrls: ['./rx-test.component.scss']
})
export class RxTestComponent implements OnInit {

  sub: Subscription;

  constructor() {
    const intervalStream$ = interval(1000);
    this.sub = intervalStream$
      .pipe(
        filter(x => x < 10),
        map(x => `Vasea x = ${x}`)
      )
      .subscribe(x => console.log(x));
  }

  ngOnInit(): void {
  }

  stop(): void {
    this.sub.unsubscribe();
  }
}

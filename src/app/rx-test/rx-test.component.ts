import {Component, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-rx-test',
  templateUrl: './rx-test.component.html',
  styleUrls: ['./rx-test.component.scss']
})
export class RxTestComponent implements OnInit {

  sub: Subscription;

  constructor() {
    const stream$ = new Observable(observer => {

      setTimeout(() => {
        observer.next(1);
      }, 1500);


      setTimeout(() => {
        observer.complete();
      }, 2100);

      setTimeout(() => {
        observer.error('Something went wrong');
      }, 2000);


      setTimeout(() => {
        observer.next(2);
      }, 2500);

    });

    this.sub = stream$
      .subscribe(
        value => console.log('Next: ', value),
        error => console.log('Error: ', error),
        () => console.log('Complete')
      );
  }

  ngOnInit(): void {
  }

  stop(): void {
    this.sub.unsubscribe();
  }
}

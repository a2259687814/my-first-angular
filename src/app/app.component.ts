import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  e = Math.E;
  str = 'hello world';
  date = new Date();
  float = 0.42;
  obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    }
  };

  search = '';
  searchField = 'title';

  posts: Post[] = [
    {title: 'Beer', text: 'Самое лучшее пиво в мире'},
    {title: 'Bread', text: 'The best bread in the world'},
    {title: 'Javascript', text: 'The best language in the world'},
  ];

  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise Resolved');
    }, 4000);
  });

  date$: Observable<Date> = new Observable(obs => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });

  addPost(): void {
    this.posts.unshift({
      title: 'Angular 8',
      text: 'Vladilen Angular 8 course'
    });
  }

 // date1: Date;
  ngOnInit(): void {
    // this.date$.subscribe(date => {
    //   this.date1 = date
    // })
  }
}

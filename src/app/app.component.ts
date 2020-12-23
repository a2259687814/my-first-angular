import {Component} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Array<Post> = [
    {
      title: 'vasea1',
      text: 'lorem10 lorem10',
      id: 1
    },
    {
      title: 'vasea2',
      text: 'lorem22 lorem22',
      id: 2
    }
  ];

  updatePosts(post: Post): void {
    this.posts.unshift(post);
    console.log(post);

  }
}

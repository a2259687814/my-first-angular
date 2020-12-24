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
  a = 2;
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
    post.id = this.a++;
    this.posts.unshift(post);
    console.log(post);
  }

  removePost(id: number): void {
    console.log('Id to remove', id);
    this.posts = this.posts.filter(p => p.id !== id);
  }
}

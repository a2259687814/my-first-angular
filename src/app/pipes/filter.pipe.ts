import { Pipe, PipeTransform } from '@angular/core';
import {Post} from '../app.component';

@Pipe({
  name: 'filterPipeTs',
  pure: false
})
export class Filter implements PipeTransform {

  transform(posts: Post[], search: string = '', field: string = 'title'): Post[] {
    if (!search.trim()) {
      return posts;
    }

    return posts.filter(post => {
      // @ts-ignore
      return post[field].toLowerCase().includes(search.toLowerCase());
    });

  }
}

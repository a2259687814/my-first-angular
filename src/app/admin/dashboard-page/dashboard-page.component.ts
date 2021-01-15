import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../../shared/interfaces';
import {Subscription} from 'rxjs';
import {PostsService} from '../../shared/posts.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  pSub!: Subscription;

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void{
    this.pSub = this.postsService.getAll().subscribe(posts => {
      this.posts = posts;
    });
  }

  remove(id: any): void {

  }

  ngOnDestroy(): void{
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
  }

}

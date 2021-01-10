import { Component, OnInit } from '@angular/core';
import {Post, PostsService} from '../posts.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post!: Post;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    // this.route.params.subscribe((params: Params) => {
    //   this.post = this.postsService.getById(+params.id);
    // });
    // this.post = this.route.snapshot.data.post;

    this.route.data.subscribe(data => {
      this.post = data.post;
    });

  }

  loadPost(): void {
    this.router.navigate(['/posts', 44]);
  }

}

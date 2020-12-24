import {Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {
  @Input('myPost') post: Post | undefined;
  @ContentChild('info', {static: true}) infoRef: ElementRef | undefined;
  @Output() onRemove = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.infoRef?.nativeElement);
  }

  removePost(): void {
    this.onRemove.emit(this.post?.id);
  }

}

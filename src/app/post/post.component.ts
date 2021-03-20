import {Component} from "@angular/core";


@Component({
  selector:'app-post',
  templateUrl: './post.component.html',
  styleUrls:['./post.component.scss']
})
export class PostComponent {
  title = 'Dynamic tytle'

  now:Date = new Date();

}

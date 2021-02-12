import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  title = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  parent(): string {
    console.log('Parent');
    return 'Parent';
  }
}

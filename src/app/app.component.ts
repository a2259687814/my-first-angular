import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic tytle2'
  img = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'

  inputValue = ''
  vasea = 'VASEA'
  petru='ion'


  constructor() {
    setTimeout(() => {
      this.img = 'http://frontendlabepam.github.io/FL5/angular/assets/img/angular-js-logo.png'
    }, 3000)
  }

  onInput(e: Event) {
    this.inputValue = (<HTMLInputElement>e.target).value;
  }

  onBlur(value: string) {
    this.inputValue = value;
  }

  onVasea(e: any) {
    this.vasea = e.target.value;
  }
}

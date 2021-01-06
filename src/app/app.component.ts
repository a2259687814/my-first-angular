import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('vasea', [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl('vasea', [
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('', Validators.required)
      })
    });
  }

  submit(): void {
    console.log(this.form?.value, this.form);
  }

  updateCity(): void {
   // const cityMap: {[index: string]: string} = {
    const cityMap: Record<string, string> = {
      ru: 'Chisinau',
      ua: 'Balti',
      by: 'Ungheni',
    };

    const cityKey = this.form.get('address')?.get('country')?.value;
    const city  = cityMap[cityKey];


  }
}

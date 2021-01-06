import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidators} from './my.validators';

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
        Validators.required,
        MyValidators.restrictedEmails
      ]),
      password: new FormControl('vasea', [
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    });
  }

  submit(): void {
    console.log(this.form?.value, this.form);
    this.form.reset();
  }

  updateCity(): void {
    // const cityMap: {[index: string]: string} = {
    const cityMap: Record<string, string> = {
      ru: 'Chisinau',
      ua: 'Balti',
      by: 'Ungheni',
    };

    const cityKey = this.form.get('address')?.get('country')?.value;
    const city = cityMap[cityKey];
    this.form.patchValue({address: {city}});
  }

  addSkill(): void {
    const control = new FormControl('', Validators.required);
    (this.form.get('skills') as FormArray).push(control);
  }

}

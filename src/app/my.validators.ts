import {FormControl} from '@angular/forms';

export class MyValidators{
  static restrictedEmails(control: FormControl): Record<string, boolean>|null{
    if (['1@1.com', '2@2.com'].includes(control.value)){
      return {restrictedEmail: true};
    }
    return null;
  }
}

import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

export enum Gender {
  Unknown,
  Male,
  Female
}

@Component({
  selector: 'app-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent {
  @ViewChild('f') signUpFom!: NgForm;
  defaultQuestion: string = 'pet';
  answer: string = '';
  gender: Gender = Gender.Unknown;
  genders = Object.values(Gender);

  onSubmit(form: NgForm) {
    console.log(form);

    const username = form.value.username;
    const email = form.value.email;
    const secret = form.value.secret;

    console.log(form.valid);
    console.log(`${username}:${email}:${secret}`);
  }

  onSuggestedClick(): void {
    this.signUpFom.form.patchValue({userData:{username: 'Superuser'}});
    /*this.signUpFom.setValue({
      userData: {
        username: 'Superuser',
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      genderType: 'Male'
    });*/
  }

  isAllowedGender(input: any) {
    return (typeof input === 'string' || input instanceof String) && input !== 'Unknown';
  }

}

import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
  answer: string = '';
  email: Boolean = false;
  genders: string[] = ['male', 'female'];

  forbiddenUsernames: string[] = ['Chris', 'Anna'];

  signupForm!: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('male', [Validators.required]),
      'hobbies': new FormArray([])
    });
  }

  onSubmit(): void {
    console.log(this.signupForm);
  }

  onAddHobby(): void {
    const formControl = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(formControl);
  }

  getAliases(): FormArray {
    return this.signupForm.get('hobbies') as FormArray;
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } | null {
    if (this.forbiddenUsernames.indexOf(control.value) > -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'test@test.com') {
            resolve({'emailIsForbidden': true})
          } else {
            resolve(null)
          }
        }, 1500)
      });
  }
}

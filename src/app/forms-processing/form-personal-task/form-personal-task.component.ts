import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-form-personal-task',
  templateUrl: './form-personal-task.component.html',
  styleUrls: ['./form-personal-task.component.css']
})
export class FormPersonalTaskComponent implements OnInit, OnDestroy {

  personalTaskForm!: FormGroup;

  ngOnInit(): void {
    this.personalTaskForm = new FormGroup({
      'projectName': new FormControl(null,  Validators.required, this.forbiddenName),
      'email' : new FormControl(null, Validators.required),
      'status' : new FormControl(null, Validators.required)
    });
  }
  ngOnDestroy(): void {
  }

  onSubmit(): void {
    let projectName = this.personalTaskForm.value.projectName;
    let email = this.personalTaskForm.value.email;
    let status = this.personalTaskForm.value.status;
    console.log(`${projectName}:${email}:${status}`);
  }

  forbiddenName(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      if (control.value === 'Test') {
        resolve({'projectNameForbidden': true});
      } else {
        resolve(null);
      }
    });
  }

}

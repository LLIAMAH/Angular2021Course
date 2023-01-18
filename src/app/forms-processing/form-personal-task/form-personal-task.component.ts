import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../../general-types/CustomValidators";

@Component({
  selector: 'app-form-personal-task',
  templateUrl: './form-personal-task.component.html',
  styleUrls: ['./form-personal-task.component.css']
})
export class FormPersonalTaskComponent implements OnInit, OnDestroy {

  personalTaskForm!: FormGroup;

  ngOnInit(): void {
    this.personalTaskForm = new FormGroup({
      'projectName': new FormControl(null,  Validators.required, CustomValidators.invalidProjectName),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'status' : new FormControl('Critical')
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

}

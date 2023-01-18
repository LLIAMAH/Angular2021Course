import {AbstractControl, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";

export class CustomValidators{
  static invalidProjectName(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      if(control.value === 'Test')
        resolve({'invalidProjectName': true});
      else
        resolve(null);
    })
  }
}

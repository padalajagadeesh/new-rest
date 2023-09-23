import { AbstractControl, ValidationErrors } from "@angular/forms";

export function timeValidator(control: AbstractControl): ValidationErrors | null {
    // dateValidator(control: FormControl): { [s: string]: boolean } {
        if (control.value) {
          const date = new Date(control.value);
          const today = new Date();
          if (date.getTime() < today.getTime()) {
            console.log(date.getTime(), today.getTime(), "9:::")
            return { 'invalidDate': true }
          }
        }
        return null;
    //   }
}

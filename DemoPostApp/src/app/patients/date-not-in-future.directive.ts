import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appDateNotInFuture]',
  providers: [{ provide: NG_VALIDATORS, useExisting: DateNotInFutureValidatorDirective, multi: true }]
})
export class DateNotInFutureValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    const selectedDate = new Date(control.value);
    const now = new Date();
    if (selectedDate > now) {
      return { futureDate: true };
    }
    return null;
  }
}

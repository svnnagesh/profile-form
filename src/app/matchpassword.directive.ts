import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms'

@Directive({
  selector: '[appMatchpassword]',
  providers: [{
    provide:NG_VALIDATORS,
    useExisting:MatchpasswordDirective,
    multi:true
  }]
})
export class MatchpasswordDirective implements Validator {

  @Input() appMatchpasswordDirective:string;
  validate(control:AbstractControl): { [key:string]:any } | null {
    const controlToCompare = control.parent.get('appMatchpassword');
    if(controlToCompare && controlToCompare.value !== control.value) {
      return { 'notEqual' : true };
    }

    return null;
  }

}

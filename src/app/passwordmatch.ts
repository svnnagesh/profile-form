import {AbstractControl} from '@angular/forms';

export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
       let password = AC.get('password').value; 
       let confirmedPassword = AC.get('confirmedPassword').value; 
        if(password != confirmedPassword) {
            //console.log('false');
            AC.get('confirmedPassword').setErrors( {MatchPassword: true} )
        } else {
            //console.log('true');
            return null
        }
    }
}
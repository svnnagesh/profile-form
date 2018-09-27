import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, FormControlName, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidation } from '../passwordmatch';;


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  cities = ['Hyderabad', 'Bangalore', 'Chennai', 'Pune'];
  states = ['Telangana', 'Andhra Pradesh', 'Maharashtra', 'Tamilnadu'];
  countries = ['India', 'USA', 'UK', 'Australia'];

  profileForm: FormGroup;
 // passwords:FormGroup;
  saveProfileData;

  saveProfileInArray = [];

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.profileFormValidations();
  }

  profileFormValidations() {
    /* this.profileForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
      password: new FormControl('', [Validators.required]),
      confirmedPassword: new FormControl('', [Validators.required]),
      city: new FormControl(this.cities[0], [Validators.required]),
      state: new FormControl(this.states[0], [Validators.required]),
      country: new FormControl(this.countries[0], [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      aboutyou: new FormControl('', [Validators.required])
    }) */

    this.profileForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      password: ['', Validators.required],
      confirmedPassword: ['', Validators.required],
      city: [this.cities[0], [Validators.required]],
      state: [this.states[0], [Validators.required]],
      country: [this.countries[0], [Validators.required]],
      gender: ['', [Validators.required]],
      aboutyou: ['', [Validators.required]]
    }, {
      validator: PasswordValidation.MatchPassword
    })

  }

  onSubmit(profileForm: FormGroup) {
    this.saveProfileData = profileForm
    this.saveProfileInArray.push(this.saveProfileData)
    var storeSet = localStorage.setItem('Profile', JSON.stringify(this.saveProfileInArray));
    this.router.navigate(['interests']);
    console.log(this.saveProfileInArray)
  }


}
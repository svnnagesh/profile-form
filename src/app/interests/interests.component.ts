import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, FormControlName, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }

  interest: FormGroup;
  saveInterestData;
  saveInterestsInArray = [];

  sports = ['Cricket', 'Tennis', 'Badminton', 'TableTennis', 'VolleyBall'];
  movies = ['Arjun Reddy', 'Geetha Govindam', 'Pellichupulu', 'Sammohanam', 'BharatAneNenu']
  poetries = ['Poetry 1', 'Poetry 2', 'Poetry 3', 'Poetry 4', 'Poetry 5']

  ngOnInit() {
      this.interestsFormValidations();
  }

  interestsFormValidations() {
    this.interest = new FormGroup({
      sport: new FormControl(this.sports[0], Validators.required),
      movie: new FormControl(this.movies[0], Validators.required),
      poetry: new FormControl(this.poetries[0], Validators.required)
    })
  }

  onSubmit(interest: FormGroup) {
    this.saveInterestData = interest
    this.saveInterestsInArray.push(this.saveInterestData)
    var storeSet = localStorage.setItem('Interests', JSON.stringify(this.saveInterestsInArray));
    this.router.navigate(['profile-pic']);
    console.log(this.saveInterestsInArray)
  }

}

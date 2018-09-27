import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { InterestsComponent } from './interests/interests.component';
import { ProfilePicComponent } from './profile-pic/profile-pic.component';
import { MatchpasswordDirective } from './matchpassword.directive';
import { ImageCropperModule } from 'ngx-image-cropper';

const routes:Routes = [
  { path:'profile', component:ProfileComponent },
  { path:'interests', component:InterestsComponent },
  { path:'profile-pic', component:ProfilePicComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    InterestsComponent,
    ProfilePicComponent,
    MatchpasswordDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ImageCropperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

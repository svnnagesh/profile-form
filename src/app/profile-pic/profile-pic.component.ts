import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.css']
})
export class ProfilePicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  imageChangedEvent: any = '';
  croppedImage: any = 'assets/images/vijay.jpg';

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(image: string) {
    this.croppedImage = image;
  }
  imageLoaded() {
    
  }
  loadImageFailed() {
   
  }

}

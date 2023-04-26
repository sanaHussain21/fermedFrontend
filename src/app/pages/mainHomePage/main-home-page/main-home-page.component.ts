import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-home-page',
  templateUrl: './main-home-page.component.html',
  styleUrls: ['./main-home-page.component.css']
})
export class MainHomePageComponent {

  
  images = [
  
    {
      imageSrc:'../../../assets/patient2.jpg',
      imageAlt: 'Patient1Image',
    },
    {
      imageSrc:'../../../assets/patient 3.jpg',
      imageAlt: 'Patient2Image',
    },
    {
      imageSrc:'../../../assets/patient4.jpg',
      imageAlt: 'Patient3Image',
    },
    {
      imageSrc:'../../../assets/patient5.jpg',
      imageAlt: 'Patient4Image',
    }
]


}

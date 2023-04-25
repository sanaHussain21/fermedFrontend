import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-welcome-page',
  templateUrl: './patient-welcome-page.component.html',
  styleUrls: ['./patient-welcome-page.component.css']
})
export class PatientWelcomePageComponent  {

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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-welcome-page',
  templateUrl: './patient-welcome-page.component.html',
  styleUrls: ['./patient-welcome-page.component.css']
})
export class PatientWelcomePageComponent  {

  images = [
  
    {
      imageSrc:'../../../assets/doctorImage.jpg',
      imageAlt: 'doctorImage',
    },
    {
      imageSrc:'../../../assets/doctorImage2.jpg',
      imageAlt: 'doctorImage2',
    },
    {
      imageSrc:'../../../assets/doctorImage3.jpg',
      imageAlt: 'doctorImage3',
    },
    {
      imageSrc:'../../../assets/doctorImage4.jpg',
      imageAlt: 'doctorImage4',
    }
]

}

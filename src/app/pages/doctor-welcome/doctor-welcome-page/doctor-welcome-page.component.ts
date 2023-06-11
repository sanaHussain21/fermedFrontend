import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-welcome-page',
  templateUrl: './doctor-welcome-page.component.html',
  styleUrls: ['./doctor-welcome-page.component.css']
})
export class DoctorWelcomePageComponent {

  /** 
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
*/
  
  constructor(private doctorService: DoctorService) { }


  ngOnInit(): void { 
    //loading doctor Details
  }
}


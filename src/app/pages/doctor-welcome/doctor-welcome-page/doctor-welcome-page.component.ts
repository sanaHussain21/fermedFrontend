import { LoginComponent } from './../../login/login.component';
import { Component, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { DoctorService } from 'src/app/services/doctor.service';
import { Doctor } from '../../doctor-class/doctor';

@Component({
  selector: 'app-doctor-welcome-page',
  templateUrl: './doctor-welcome-page.component.html',
  styleUrls: ['./doctor-welcome-page.component.css']
})
export class DoctorWelcomePageComponent {

  
  //[]
  localStorageResult: string | null | undefined;
  result: string | null = '' ;
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
  
  constructor(private doctorService: DoctorService) {
    
   }


  ngOnInit(): void { 
  
  }

  /** 
  getSaveData() {
    this.localStorageResult = localStorage.getItem("email")
    if (this.localStorageResult === null) {
      this.result = [];
    }
    else {
      this.result =JSON.parse(this.localStorageResult)
    }
    return this.result
  }
 */ 

 

}


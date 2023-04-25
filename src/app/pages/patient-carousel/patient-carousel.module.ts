import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientCarouselComponent } from './patient-carousel/patient-carousel.component';



@NgModule({
  declarations: [
    PatientCarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PatientCarouselComponent
  ]
})
export class PatientCarouselModule { }

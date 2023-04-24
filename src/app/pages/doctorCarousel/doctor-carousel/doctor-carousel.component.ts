import { Component, Input, OnInit } from '@angular/core';


interface carouselImages {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-doctor-carousel',
  templateUrl: './doctor-carousel.component.html',
  styleUrls: ['./doctor-carousel.component.css']
})
export class DoctorCarouselComponent implements OnInit {
 @Input() images: carouselImages[] =  []

  selectedIndex = 0;

  

  ngOnInit(): void {
  }

}

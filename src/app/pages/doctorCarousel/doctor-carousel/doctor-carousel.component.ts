import { Component, Input, OnInit } from '@angular/core';
import { throwMatDuplicatedDrawerError } from '@angular/material/sidenav';


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
  @Input() indicators = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000;

  @Input() controls = true;
  selectedIndex = 0;
  onNextClick: any;
 
  
  
  

  

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages();
  }
  }

  autoSlideImages(): void{
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }
 



  //with the help of this fnction we are able to go from one pic to another
  selectImage(index: number): void {
    this.selectedIndex = index;
  }
  

  onPrevClick(): void {
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.images.length -1;
    } else {
      this.selectedIndex--;
    }
    
  }

}

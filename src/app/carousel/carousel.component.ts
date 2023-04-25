import { Component, OnInit, Input } from '@angular/core';

interface carouselImage { 
  imageSrc: string;
  imageAlt: string;
}


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() images: carouselImage [] =  []


  constructor() { }

  ngOnInit(): void {
  }

}

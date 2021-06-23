import { Component, OnInit } from '@angular/core';
import { CarouselService } from '../carousel.service';
import { Icarousel } from '../icarousel';

@Component({
  selector: 'app-show-carousel-component',
  templateUrl: './show-carousel-component.component.html',
  styleUrls: ['./show-carousel-component.component.css']
})
export class ShowCarouselComponentComponent implements OnInit {
  current: Icarousel[] = [];

  constructor(private carouselService: CarouselService) { }

  ngOnInit(): void {
    this.carouselService.getCarouselServiceData().subscribe(data => {
      this.current = data
    })
  }

  slideConfig = {"slidesToShow": 6, "slidesToScroll": 6, "arrows":true };

  imageClickEvent(id:number, str: string) {
    console.log("Show Name:: "+ str )
    console.log("Show Id::" + id)
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IcarouselData } from './icarousel-data';
import { map } from 'rxjs/operators';
import { Icarousel } from './icarousel';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private httpClient: HttpClient) { }

  getCarouselServiceData() {
    
    return this.httpClient.get<IcarouselData[]>(`http://api.tvmaze.com/shows`).pipe(map(data => this.transformToICarousel(data)))
  
  }

  private transformToICarousel(data: IcarouselData[]) {

    const list: Icarousel[] = [];
     
    data.map(data => {
      list.push({
        id : data.id,
        title : data.name,
        img : data.image.medium,
        genre : data.genres[0],
        genre1 : data.genres[1],
        genre2 : data.genres[2]
      })

    })
    
    return list
  }

  }


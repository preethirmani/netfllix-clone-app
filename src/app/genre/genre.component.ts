import { Component, OnInit } from '@angular/core';
import { Ishowdata } from '../ishowdata';
import { ShowdataService } from '../showdata.service';


export interface Genre {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})

export class GenreComponent implements OnInit {

  genreshow:Ishowdata[] = []
  filteredshow:Ishowdata[] = []
  selected:any;

  onGenreselected(genrevalue:any) {
    console.log(genrevalue)
    this.filteredshow = this.filtergenre(genrevalue)
  }

  filtergenre(value:string) {
    console.log(value)
    return this.genreshow.filter(data => data.genres.includes(value))
  }


  genres: Genre[] = [
    { value: 'Action', viewValue: 'Action' },
    { value: 'Adventure', viewValue: 'Adventure' },
    { value: 'Comedy', viewValue: 'Comedy' },
    { value: 'Science-Fiction', viewValue: 'Science-Fiction' },
    { value: 'Thriller', viewValue: 'Thriller' },
    { value: 'Horror', viewValue: 'Horror' },
    { value: 'Romance', viewValue: 'Romance' },
    { value: 'Drama', viewValue: 'Drama' },
    { value: 'Crime', viewValue: 'Crime' },
    { value: 'Fantasy', viewValue: 'Fantasy'},
  ];

  constructor(private showdataservice:ShowdataService) { }

  ngOnInit(): void {

    this.showdataservice.getshowdata().subscribe(data => {
     this.genreshow = data
     this.filteredshow = this.genreshow
     console.log(this.filteredshow)

    })
  }

}

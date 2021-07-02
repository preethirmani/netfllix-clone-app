import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {filter, map} from 'rxjs/operators';
import { from,Observable} from 'rxjs';
import {of} from 'rxjs';
import { Ishowdata } from './ishowdata';
import { Ishowdatas } from './ishowdata';

@Injectable({
  providedIn: 'root'
})
export class ShowdataService {

  constructor(private httpclient:HttpClient) { }

  getshowdata() {
    return this.httpclient.get<Ishowdata[]>('http://api.tvmaze.com/shows').pipe(map(data => this.transformshowdata(data)))
  }

  transformshowdata(data:Ishowdata[]):Ishowdata[] {
    let shows:Ishowdatas = []

    data.map(data => {
      shows.push({
        id:data.id,
        url:data.url,
        name:data.name,
        image:data.image,
        genres:data.genres,
        summary:data.summary,
        rating:data.rating,
      })
    })
    return shows
  }
}

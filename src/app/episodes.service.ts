import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iepisodedetail } from './iepisodedetail';
import { filter, map} from 'rxjs/operators';
import { Iepisode } from './iepisode';


@Injectable({
  providedIn: 'root'
})


export class EpisodesService {

  constructor(private httpclient:HttpClient) { }

  getepisodedata(id:number) {

    console.log("In episode service")

    return this.httpclient.get<Iepisodedetail[]>(` http://api.tvmaze.com/seasons/${id}/episodes`).pipe(map(data => this.transformepisodedata(data)))

    }

  transformepisodedata(data:Iepisodedetail[]):Iepisode[]{

    let episodelist:Iepisode[] = []

    data.map(data => {
      episodelist.push({
        id:data.id,
        image:data.image,
        name:data.name?data.name:'',
        number:data.number?data.number:'',
        season:data.season,
        summary:data.summary?data.summary:'',
        runtime:data.runtime

      })
    })

    console.log("in episode service")
    console.log(episodelist)
    return episodelist
  }
}

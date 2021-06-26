
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { EpisodesService } from '../episodes.service';
import { Iepisode } from '../iepisode';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})


export class EpisodesComponent implements OnInit {

  sub:any;
  seasonid:any;

  episodesdetail:Iepisode[] = []

  constructor(private _Activatedroute:ActivatedRoute,
              private _router:Router,
              private episodeservice:EpisodesService) { }

  ngOnInit(): void {

    console.log('In episode component')

    this.sub = this._Activatedroute.paramMap.subscribe(param => {
      console.log(param)
      console.log(typeof(param))
      this.seasonid = param.get('id')
    })

    this.episodeservice.getepisodedata(this.seasonid).subscribe(data => {
      this.episodesdetail = data
      console.log(this.episodesdetail[0])
      console.log(this.episodesdetail)
      }
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

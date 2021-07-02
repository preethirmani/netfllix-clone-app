import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {IPageDescription1} from './ipage-description1';
import {IPageDescription2} from './ipage-description2';

import { CastExpr } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class DescriptionService {

  constructor(private httpClient:HttpClient) { }

  //getPagedescription(id:number)

  //{
    /*
    console.log(id)
   return this.httpClient.get<IPageDescription2>(
      `https://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`
     ).pipe (
      map (data => this.transformToIPageDescription1(data))
    )
    */

  //}

  getPagedescription(id:string){
    console.log(id)
    let reg = /[0123456789]/
    let url = ''
    if(reg.test(id)) {
      console.log(id)
      // url for id
      url = `https://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`
    } else {
      // url for string
      url = `https://api.tvmaze.com/singlesearch/shows?q=${id}&embed[]=seasons&embed[]=cast`
    }
    console.log("URL IN DESCRIPTION SERVICE:"+url)
    console.log(id)
   return this.httpClient.get<IPageDescription2>(url).pipe (map(data => this.transformToIPageDescription1(data)))
  }

private transformToIPageDescription1 (data:IPageDescription2):IPageDescription1{
  console.log(data)
   return {
     name:data.name,
     id:data.id,
     language:data.language,
     runtime:data.runtime,
     summary:data.summary,
     cast:data._embedded.cast,
     rating:data.rating.average?data.rating.average:0,
     genres:data.genres,
     image:data.image.original,
     season:data._embedded.seasons

   }

 }

}

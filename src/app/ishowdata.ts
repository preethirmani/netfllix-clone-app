export interface Ishowdata {

  id: number,
  url: string,
  name: string,
  genres: string[],
  rating:{
    average:number
  },
  image:{
    medium:string
  },
  summary:string

}

export interface Ishowdatas extends Array<Ishowdata>{}

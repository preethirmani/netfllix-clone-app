export interface IPageDescription2 {
 id: number,
 name: string,
 language: string,
 genres: string[],
 runtime:number,
 cast : 
 {person:{
   name:string
 }},
 image:{
   original: string
 },
 rating:{
   average: number
 },
 summary: string,

 _embedded: {
    seasons:[
      {
        id: number,
        url:string,
        name: string,
        number: number,
        image:{
          medium:string
        }
      }
    ],

    cast:[
      {
        person: {
       name:string
        }
      
    }
    ]
 }


}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DescriptionService } from '../description.service';
import { IPageDescription1 } from '../ipage-description1';

@Component({
  selector: 'app-page-description',
  templateUrl: './page-description.component.html',
  styleUrls: ['./page-description.component.css']
})
export class PageDescriptionComponent implements OnInit {
  page:any ={};
  current:any = {
    id:100
  }
  constructor(private descriptionService:DescriptionService) {} 
  ngOnInit(): void {
    this.descriptionService.getPagedescription(this.current.id).subscribe (data=>{(this.page = data)
    console.log(this.page)
    console.log(this.page.name)
  })
  
    
  

 
}

}
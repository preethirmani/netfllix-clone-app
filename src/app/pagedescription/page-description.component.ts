import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DescriptionService } from '../description.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-page-description',
  templateUrl: './page-description.component.html',
  styleUrls: ['./page-description.component.css']
})
export class PageDescriptionComponent implements OnInit {
  sub:any;
  userinput:any= {}
  page:any ={};
  current:any = {
    id:0
  }
  constructor(private descriptionService:DescriptionService,
              private route:ActivatedRoute,
              private _router:Router) {}

  ngOnInit(): void {


    this.sub = this.route.paramMap.subscribe(param => {
      console.log(param)
      console.log(typeof(param))
      this.userinput = param.get('id')
      console.log((this.userinput))
    })


    this.current.id = this.route.snapshot.params['id']
    this.descriptionService.getPagedescription(this.current.id).subscribe (data=>{(this.page = data)
    console.log(this.page)
    console.log(this.page.name)
  },
  error => (this._router.navigate(['404']))

    )

}

ngOnDestroy() {
  this.sub.unsubscribe();
}
}

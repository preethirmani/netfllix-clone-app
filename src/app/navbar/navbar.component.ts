import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  toggleClass: boolean = false

  searchshow = new FormControl('',[Validators.minLength(3)])

  userinput:string = ''


  constructor(private _Activatedroute:ActivatedRoute,
              private _router:Router) { }

  ngOnInit(): void {

    console.log("in navbar ts")

    this.searchshow.valueChanges
    .pipe(debounceTime(1000))
    .subscribe((searchdata:string) => {
      if(!this.searchshow.invalid && searchdata) {
        this.userinput = searchdata
        console.log(this.userinput)
        console.log("In navbar ts")
        this._router.navigate(['singlesearch/:id',this.userinput])
        //this._router.navigate(['/show/:id'],{state:{uservalue:this.userinput}})

      }



    })
  }

}

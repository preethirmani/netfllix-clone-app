import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDescriptionComponent } from './pagedescription/page-description.component';
import { ShowCarouselComponentComponent } from './show-carousel-component/show-carousel-component.component';

const routes: Routes = [

  {path:'', component: ShowCarouselComponentComponent},
  {path:'singleSearch/:id', component: PageDescriptionComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

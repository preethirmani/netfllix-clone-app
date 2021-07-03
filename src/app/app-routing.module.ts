import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesComponent } from './episodes/episodes.component';
import { PageDescriptionComponent } from './pagedescription/page-description.component';
import { ShowCarouselComponentComponent } from './show-carousel-component/show-carousel-component.component';
import { GenreComponent } from './genre/genre.component';
import  {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path:'', redirectTo:'/show',  pathMatch: 'full'},
  {path:'show', component: ShowCarouselComponentComponent},
  {path:'singleSearch/:id', component: PageDescriptionComponent},
  {path:'singleSearch/:id/:id',component:EpisodesComponent},
  {path:'tvshows',component:GenreComponent},
  {path:'**',component:PagenotfoundComponent},
  {path:'404',component:PagenotfoundComponent}];
  
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

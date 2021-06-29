import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowCarouselComponentComponent } from './show-carousel-component/show-carousel-component.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { EpisodesComponent } from './episodes/episodes.component';
import { SubstrpipePipe } from './substrpipe.pipe'
import { PageDescriptionComponent } from './pagedescription/page-description.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowCarouselComponentComponent,
    FooterComponent,
    EpisodesComponent,
    SubstrpipePipe,
    PageDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

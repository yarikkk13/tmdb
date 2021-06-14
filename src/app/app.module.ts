import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from './components/app/app.component';
import {HeaderComponent} from './components/header/header.component';
import {MoviesListComponent} from './components/movies-list/movies-list.component';
import {MovieCardComponent} from './components/movie-card/movie-card.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MovieInfoComponent} from './components/movie-info/movie-info.component';
import {GenresComponent} from './components/genres/genres.component';
import { MoviesByGenreComponent } from './components/movies-by-genre/movies-by-genre.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';

let routes: Routes = [
  {
    path: 'movies', component: HeaderComponent, children: [
      {path: ':page', component: MoviesListComponent},
      {path: ':page/:id', component: MovieInfoComponent}
    ]
  },
  {path: 'genres', component: GenresComponent, children:[
      {path: ':name',component: MoviesByGenreComponent}
    ]}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesListComponent,
    MovieCardComponent,
    MovieInfoComponent,
    GenresComponent,
    MoviesByGenreComponent,
    StarRatingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

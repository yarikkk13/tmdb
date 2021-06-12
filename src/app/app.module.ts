import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/app/app.component';
import {HeaderComponent} from './components/header/header.component';
import {MoviesListComponent} from './components/movies-list/movies-list.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {GenresComponent} from './components/genres/genres.component';
import {MovieComponent} from './components/movie/movie.component';
import {SelectedMovieComponent} from './components/selected-movie/selected-movie.component';

let routes: Routes = [
  {path: 'movies', component: MoviesListComponent},
  {path: 'movies/:id', component: SelectedMovieComponent},
  {path: 'genres', component: GenresComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesListComponent,
    GenresComponent,
    MovieComponent,
    SelectedMovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

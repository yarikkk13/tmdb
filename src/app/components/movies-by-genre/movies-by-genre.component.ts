import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MoviesByPageService} from "../../services/movies-by-page.service";
import {GenreService} from "../../services/genre.service";

@Component({
  selector: 'app-movies-by-genre',
  templateUrl: './movies-by-genre.component.html',
  styleUrls: ['./movies-by-genre.component.css']
})
export class MoviesByGenreComponent implements OnInit {

  movies: any;
  page: any

  constructor(private activatedRoute: ActivatedRoute,
              private genreService: GenreService) {
    this.activatedRoute.params
      .subscribe(params => {
        this.genreService.getMoviesByGenre(params.name)
          .subscribe(value => {
            this.movies = value.results
            this.page = value.page
          })
      })


  }

  ngOnInit(): void {
  }
}

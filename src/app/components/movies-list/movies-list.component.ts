import {Component, OnInit} from '@angular/core';
import {MoviesByPageService} from "../../services/movies-by-page.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  page: any;
  movies: any[];

  constructor(private activatedRoute: ActivatedRoute,
              private moviesByPageService: MoviesByPageService) {
    this.activatedRoute.params
      .subscribe(params => {
        this.moviesByPageService.getMoviesByPage(params.page)
          .subscribe(value => {
            this.movies = value.results
            this.page = value.page
          })
      })
  }

  ngOnInit(): void {
  }

}

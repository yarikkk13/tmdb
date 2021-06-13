import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MoviesListService} from "../../services/movies-list.service";
import {MoviesByPageService} from "../../services/movies-by-page.service";

@Component({
  selector: 'app-selected-page',
  templateUrl: './selected-page.component.html',
  styleUrls: ['./selected-page.component.css']
})
export class SelectedPageComponent implements OnInit {

  page: any;
  movies: any[];


  constructor(private activatedRoute: ActivatedRoute,
              private moviesByPageService: MoviesByPageService) {
    this.activatedRoute.params
      .subscribe(params => {
        this.moviesByPageService.getMoviesByPage(params.page)
          .subscribe(value => {
            this.page = value.page
            this.movies = value.results
          })
      })

  }


  ngOnInit(): void {
  }

}

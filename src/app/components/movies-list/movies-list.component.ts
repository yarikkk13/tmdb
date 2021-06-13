import {Component, OnInit} from '@angular/core';
import {MoviesListService} from "../../services/movies-list.service";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  page: any;
  movies: any[];


  constructor(private moviesListService: MoviesListService) {
  }

  ngOnInit(): void {
    this.moviesListService.getMovies()
      .subscribe(value => {
        this.movies = value.results
        this.page = value.page
      })
  }

  goToNextPage() {
    this.moviesListService.next()
      .subscribe(value => {
        this.movies = value?.results
        this.page = value.page
      })
  }

  goToPreviousPage() {
    this.moviesListService.previous()
      .subscribe(value => {
        this.movies = value?.results
        this.page = value.page
      })
  }
}

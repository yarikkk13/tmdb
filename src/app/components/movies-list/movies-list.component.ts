import {Component, OnInit} from '@angular/core';
import {MoviesListService} from "../../services/movies-list.service";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies :any[]

  constructor(private moviesListService: MoviesListService) {
  }

  ngOnInit(): void {
    this.moviesListService.getMovies()
      .subscribe(value => this.movies = value.results)
  }

}

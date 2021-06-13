import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MoviesListService} from "../../services/movies-list.service";

@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.css']
})
export class SelectedMovieComponent implements OnInit {
  movie: any;


  constructor(private activatedRoute: ActivatedRoute,
              private moviesListService: MoviesListService) {
    this.activatedRoute.params
      .subscribe(params => {
        this.moviesListService.getMovieById(params.id)
          .subscribe(value => {
            this.movie = value
          })
      })
  }


  ngOnInit(): void {
  }

}

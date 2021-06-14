import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  movie: any;


  constructor(private activatedRoute: ActivatedRoute,
              private moviesListService: MovieService) {
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

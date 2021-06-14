import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css'],
  providers: [NgbRatingConfig]
})
export class MovieInfoComponent implements OnInit {
  movie: any;


  constructor(private activatedRoute: ActivatedRoute,
              private moviesListService: MovieService,
              config: NgbRatingConfig) {
    config.max = 10;
    config.readonly = true;
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

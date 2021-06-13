import {Component, OnInit} from '@angular/core';
import {GenresService} from "../../services/genres.service";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres: any[];

  constructor(private genresService: GenresService) {
  }

  ngOnInit(): void {
    this.genresService.getListOfGenres()
      .subscribe(value => this.genres = value.genres)
  }

}

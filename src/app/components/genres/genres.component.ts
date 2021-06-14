import {Component, OnInit} from '@angular/core';
import {HeaderService} from "../../services/header.service";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres: any[];

  constructor(private headerService: HeaderService) {
  }

  ngOnInit(): void {
    this.headerService.getListOfGenres()
      .subscribe(value => this.genres = value.genres)
  }

}

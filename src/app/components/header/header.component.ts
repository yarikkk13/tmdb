import {Component, OnInit} from '@angular/core';
import {HeaderService} from "../../services/header.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  page:number

  constructor(private headerService: HeaderService) {
  }

  ngOnInit(): void {
    this.headerService.getMovies()
      .subscribe(value => this.page = value.page)
  }

}

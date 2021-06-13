import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  private url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=5560774ec42bbecbaa78fd2d63c68e9d&language=en-US'

  constructor(private httpClient: HttpClient) {
  }

  getListOfGenres(): Observable<any> {
    return this.httpClient.get<any>(this.url)
  }
}

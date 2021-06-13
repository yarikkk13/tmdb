import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoviesByPageService {
  private url = 'https://api.themoviedb.org/3/movie/popular?api_key=5560774ec42bbecbaa78fd2d63c68e9d&language=en-US&page='

  constructor(private httpClient: HttpClient) {
  }

  getMoviesByPage(page: any): Observable<any> {
    return this.httpClient.get<any>(this.url + page)
  }
}

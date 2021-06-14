import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private url = 'https://api.themoviedb.org/3/discover/movie?api_key=5560774ec42bbecbaa78fd2d63c68e9d&with_genres='

  constructor(private httpClient: HttpClient) {
  }
  getMoviesByGenre(id:any):Observable<any>{
    return this.httpClient.get<any>(this.url+id)
  }
}

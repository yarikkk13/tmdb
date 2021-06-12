import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieByIdService {

  private urlBegin = 'https://api.themoviedb.org/3/movie/'
  private urlEnd = '?api_key=5560774ec42bbecbaa78fd2d63c68e9d&language=en-US'

  constructor(private httpClient: HttpClient) {
  }

  getMovieById(id:any):Observable<any> {
    return this.httpClient.get<any>(this.urlBegin+id+this.urlEnd)
  }
}

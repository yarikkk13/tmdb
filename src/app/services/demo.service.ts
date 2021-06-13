import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  private url = 'https://api.themoviedb.org/3/movie/popular?api_key=5560774ec42bbecbaa78fd2d63c68e9d&language=en-US&page=1'

  constructor(private httpClient: HttpClient) {
  }

  getDemo(): Observable<any> {
    return this.httpClient.get<any>(this.url)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  discoverMovieUrl = `${environment.BASE_URL}/3/discover/movie?api_key=${environment.API_KEY}`;
  baseurl = 'https://api.themoviedb.org/3/movie/';
  movieByIdUrl = '';

  constructor(private http: HttpClient) {}
  getMovieList() {
    return this.http.get(this.discoverMovieUrl);
  }
  getMovieScreenshots(id: number) {
    return this.http.get(
      `${this.baseurl}${id}/images?api_key=${environment.API_KEY}`
    );
  }
  getMovieById(id: number) {
    this.movieByIdUrl = this.baseurl + id + '?api_key=' + environment.API_KEY;
    // console.log(this.movieByIdUrl);
    return this.http.get(this.movieByIdUrl);
  }
}

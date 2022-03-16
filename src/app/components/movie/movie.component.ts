import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  isClick = false;
  movie: any;
  result: any = { backdrops: [] };
  hour = 0;
  minute = 0;
  year = '';
  billion = '';
  screenshots: any;
  isLoadmore = false;
  loadMoreScreenshots = [];
  moviePicsURL = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(id);
    this.movieService.getMovieById(id).subscribe((result) => {
      this.movie = result;
      this.hour = Math.floor(this.movie.runtime / 60);
      this.minute = Math.floor(this.movie.runtime % 60);
      this.year = this.movie.release_date.substring(0, 4);
      this.billion = this.convertNumberToBillion(this.movie.revenue).toString();
    });
    this.moviePicsURL = `https://api.themoviedb.org/3/movie/${id}/images?api_key=${environment.API_KEY}`;
    this.http.get(this.moviePicsURL).subscribe((data: any) => {
      this.result = this.screenshots = data.backdrops;
      this.screenshots = this.result;
    });
  }
  convertNumberToBillion(labelValue: any) {
    return Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + 'B'
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + 'M'
      : // Three Zeroes for Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + 'K'
      : Math.abs(Number(labelValue));
  }

  getImage(poster: string) {
    const bgUrl =
      'https://image.tmdb.org/t/p/w500/' +
      poster +
      '?api_key=' +
      environment.API_KEY;
    return bgUrl;
  }
}

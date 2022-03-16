import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input()
  movieResultCard: any = {};
  bgImage = '';
  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bgImage =
      ' https://image.tmdb.org/t/p/w500' + this.movieResultCard.poster_path;
  }

  getImagePath(path: string): string {
    return 'https://image.tmdb.org/t/p/w500/' + path;
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-screenshot',
  templateUrl: './movie-screenshot.component.html',
  styleUrls: ['./movie-screenshot.component.scss'],
})
export class MovieScreenshotComponent implements OnInit {
  @Input('pic')
  screenshot: any;
  constructor() {}
  getImage(file_path: string) {
    return 'https://image.tmdb.org/t/p/w500/' + file_path;
  }
  ngOnInit(): void {}
}

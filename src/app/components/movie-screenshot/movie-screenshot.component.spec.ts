import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieScreenshotComponent } from './movie-screenshot.component';

describe('MovieScreenshotComponent', () => {
  let component: MovieScreenshotComponent;
  let fixture: ComponentFixture<MovieScreenshotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieScreenshotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieScreenshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

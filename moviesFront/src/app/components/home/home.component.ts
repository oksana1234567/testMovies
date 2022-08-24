import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { BehaviorSubject, Subscription } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import Movie from 'src/app/shared/interface/movie.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {

  public movies$!: BehaviorSubject<Movie[]>;
  public moviesByGenre$!: BehaviorSubject<Movie[]>;
  public subscriptionMovies$!: Subscription;
  public subscriptionMoviesByGenre$!: Subscription;
  private subscriptions$: Subscription[] = [];
  public limit: number = 10;
  public offset: number = 1;
  public length: number = 20;
  public selectedGenre!: string;
  public genres!: Array<string>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getMovies(this.limit, this.offset);
    this.moviesService.getGenres().subscribe(val => this.genres = val);
  }

  public getMovies(limit: number, offset: number): void {
    this.movies$ = this.moviesService.movies$;
    this.subscriptionMovies$ = this.moviesService.getAllMovies(limit, offset).subscribe();
    this.subscriptions$.push(this.subscriptionMovies$);
  }

  public getMoviesByGenre(genre: string, limit: number, offset: number): void {
    this.moviesByGenre$ = this.moviesService.moviesByGenre$;
    this.subscriptionMoviesByGenre$ = this.moviesService.getMoviesByGenre(genre, limit, offset).subscribe();
    this.subscriptions$.push(this.subscriptionMoviesByGenre$);
  }

  public onPaginateChange(event: PageEvent) {
    this.limit = event.pageSize;
    this.offset = event.pageIndex + 1;
    this.length = event.pageSize * (event.pageIndex + 2)
    this.getMovies(this.limit, this.offset);
  }

  public doMoviesByGenres(genre: string) {
    this.getMoviesByGenre(genre, this.limit, this.offset)
  }

  ngOnDestroy() {
    this.subscriptions$.forEach((subscription) => { if (subscription) { subscription.unsubscribe() } });
  }
}


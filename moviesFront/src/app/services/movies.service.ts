import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Movie from '../shared/interface/movie.interface';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  public environment = environment;
  public movies$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  public moviesByGenre$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);

  constructor(private http: HttpClient) { }

  public getAllMovies(limit: number, offset: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.environment.url}/movies/?limit=${limit}&offset=${offset}`)
      .pipe(map((res: Movie[]) => {
        this.movies$.next(res);
        return res;
      }))
  };

  public getMoviesByGenre(genre: string, limit: number, offset: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.environment.url}/movies/${genre}/?limit=${limit}&offset=${offset}`)
      .pipe(map((res: Movie[]) => {
        this.moviesByGenre$.next(res);
        return res;
      }))
  };

  public getGenres() {
    return this.http.get<Array<string>>(`${this.environment.url}/genres`)
      .pipe(map((res: Array<string>) => {
        return res;
      }))
  };
}

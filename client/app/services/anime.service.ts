import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AnimeService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getAllAnime(): Observable<any> {
    return this.http.get('/api/anime_all').map(res => res.json());
  }

  countAnime(): Observable<any> {
    return this.http.get('/api/anime/count').map(res => res.json());
  }

  getAnime(anime): Observable<any> {
    return this.http.get(`/api/anime/${anime._id}`).map(res => res.json());
  }
}

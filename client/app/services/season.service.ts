import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SeasonService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getSeasons(): Observable<any> {
    return this.http.get('/api/seasons').map(res => res.json());
  }

  countSeason(): Observable<any> {
    return this.http.get('/api/seasons/count').map(res => res.json());
  }

  getSeasonByValue(season: string[]): Observable<any> {
    return this.http.get(`/api/seasons/${season[1]}/${season[2]}`).map(res => res.json());
  }
}

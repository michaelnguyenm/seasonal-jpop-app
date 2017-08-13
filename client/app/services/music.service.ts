import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MusicService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getAllMusic(): Observable<any> {
    return this.http.get('/api/music_all').map(res => res.json());
  }

  countMusic(): Observable<any> {
    return this.http.get('/api/music/count').map(res => res.json());
  }

  getMusicById(music: String): Observable<any> {
    return this.http.get(`/api/music/${music}`).map(res => res.json());
  }
}

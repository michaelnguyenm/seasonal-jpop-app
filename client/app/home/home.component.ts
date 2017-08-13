import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { AnimeService } from '../services/anime.service';
import { MusicService } from '../services/music.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  animeList = [];
  isLoading = true;
  musicIsLoading = true;

  constructor(private animeService: AnimeService,
              private musicService: MusicService,
              private http: Http,
              public toast: ToastComponent) { }

  ngOnInit() {
    this.getAllAnime();
  }

  getAllAnime() {
    this.animeService.getAllAnime().subscribe(
      data => this.animeList = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  // getMusic(music) {
  //   this.musicIsLoading = true;
  //   this.musicService.getMusic(music).subscribe(
  //     data => this.music = data,
  //     error => console.log(error),
  //     () => this.musicIsLoading = false
  //   );
  // }
}

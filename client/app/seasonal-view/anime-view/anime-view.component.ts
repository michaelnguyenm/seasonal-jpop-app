import { Component, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-anime-view',
  templateUrl: './anime-view.component.html',
  styleUrls: ['./anime-view.component.css']
})
export class AnimeViewComponent implements OnInit {

  isLoading: boolean = true;
  animeData = {};
  @Input() animeId: string;

  constructor(private animeService: AnimeService,
              private http: Http) { }

  ngOnInit() {
    this.getAnime();
  }

  getAnime() {
    this.animeService.getAnimeById(this.animeId).subscribe(
      data => this.animeData = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

}

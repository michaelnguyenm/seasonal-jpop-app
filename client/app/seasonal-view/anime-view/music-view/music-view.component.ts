import { Component, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { MusicService } from '../../../services/music.service';

@Component({
  selector: 'app-music-view',
  templateUrl: './music-view.component.html',
  styleUrls: ['./music-view.component.css']
})
export class MusicViewComponent implements OnInit {

  isLoading: boolean = true;
  musicData = {};
  @Input() musicId: string;

  constructor(private musicService: MusicService,
              private http: Http) { }

  ngOnInit() {
    this.getMusic();
  }

  getMusic() {
    this.musicService.getMusicById(this.musicId).subscribe(
      data => this.musicData = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

}

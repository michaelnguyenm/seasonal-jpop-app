import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { AnimeService } from '../services/anime.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  anime = {};
  animeList = [];
  isLoading = true;
  isEditing = false;

  constructor() { }

  ngOnInit() {
    this.isLoading = false;
  }

}

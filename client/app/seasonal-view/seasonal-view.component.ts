import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { SeasonService } from '../services/season.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-seasonal-view',
  templateUrl: './seasonal-view.component.html',
  styleUrls: ['./seasonal-view.component.css']
})
export class SeasonalViewComponent implements OnInit {

  seasonalData = [];
  isLoading: boolean = true;
  router: Router;
  currURL: string[];

  constructor(private seasonService: SeasonService,
              private http: Http,
              private _router: Router,
              public toast: ToastComponent) {
    this.router = _router;
  }

  ngOnInit() {
    this.getSeason();
    for(let anime in this.seasonalData) {
      console.log(anime);
    }
    // console.log(this.seasonalData);
    // console.log(this.yearData['1']);
    // console.log(this.yearData);
  }

  getSeason() {
    this.currURL = this.router.url.split('/');
    this.seasonService.getSeasonByValue(this.currURL).subscribe(
      data => this.seasonalData = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

}

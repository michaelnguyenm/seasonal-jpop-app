import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AnimeService } from './services/anime.service';
import { MusicService } from './services/music.service';
import { SeasonService } from './services/season.service';

import { SeasonalViewComponent } from './seasonal-view/seasonal-view.component';
import { AnimeViewComponent } from './seasonal-view/anime-view/anime-view.component';
import { MusicViewComponent } from './seasonal-view/anime-view/music-view/music-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    SeasonalViewComponent,
    AnimeViewComponent,
    MusicViewComponent
  ],
  imports: [
    RoutingModule,
    SharedModule
  ],
  providers: [
    AnimeService,
    MusicService,
    SeasonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

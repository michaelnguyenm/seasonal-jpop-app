import * as express from 'express';

import SeasonsCtrl from './controllers/seasons';
import Seasons from './models/seasons';

import AnimeCtrl from './controllers/anime';
import Anime from './models/anime';

import MusicCtrl from './controllers/music';
import Music from './models/music';

export default function setRoutes(app) {

  const router = express.Router();

  const seasonsCtrl = new SeasonsCtrl();
  const animeCtrl = new AnimeCtrl();
  const musicCtrl = new MusicCtrl();

  // Seasons

  // Anime
  router.route('/anime_all').get(animeCtrl.getAll);
  router.route('/anime/count').get(animeCtrl.count);
  router.route('/anime').post(animeCtrl.insert);
  router.route('/anime/:id').get(animeCtrl.get);
  router.route('/anime/:id').put(animeCtrl.update);
  router.route('/anime/:id').delete(animeCtrl.delete);

  // Music
  router.route('/music_all').get(musicCtrl.getAll);
  router.route('/music/count').get(musicCtrl.count);
  router.route('/music').post(musicCtrl.insert);
  router.route('/music/:id').get(musicCtrl.get);
  router.route('/music/:id').put(musicCtrl.update);
  router.route('/music/:id').delete(musicCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}

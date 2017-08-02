import * as express from 'express';

import AnimeCtrl from './controllers/anime';
import Anime from './models/anime';

export default function setRoutes(app) {

  const router = express.Router();

  const animeCtrl = new AnimeCtrl();

  // Anime
  router.route('/anime_all').get(animeCtrl.getAll);
  router.route('/anime/count').get(animeCtrl.count);
  router.route('/anime').post(animeCtrl.insert);
  router.route('/anime/:id').get(animeCtrl.get);
  router.route('/anime/:id').put(animeCtrl.update);
  router.route('/anime/:id').delete(animeCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}

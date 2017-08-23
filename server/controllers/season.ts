import Season from '../models/season';
import BaseCtrl from './base';

export default class SeasonCtrl extends BaseCtrl {
  model = Season;

  // Get by year
  getSeason = (req, res) => {
    this.model.findOne({ year: req.params.yr }, (err, obj) => {
      if (err) { return console.error(err); }
      res.json(obj[req.params.season]);
    });
  };
}

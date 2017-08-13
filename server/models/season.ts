import * as mongoose from 'mongoose';

const seasonSchema = new mongoose.Schema({
  year: Number,
  0: [mongoose.Schema.Types.ObjectId],
  1: [mongoose.Schema.Types.ObjectId],
  2: [mongoose.Schema.Types.ObjectId],
  3: [mongoose.Schema.Types.ObjectId]
}, { collection: 'seasons' });

const Season = mongoose.model('Season', seasonSchema);

export default Season;

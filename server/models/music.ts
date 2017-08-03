import * as mongoose from 'mongoose';

const musicSchema = new mongoose.Schema({
  title_jp: String,
  title_en: String,
  title_rom: String,
  catalog: String,
  artist: [String],
  release_date: Date,
  links: {
    amazon: String,
    vgmdb: String
  }
}, { collection: 'music' });

const Music = mongoose.model('Anime', musicSchema);

export default Music;

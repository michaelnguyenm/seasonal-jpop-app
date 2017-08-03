import * as mongoose from 'mongoose';

const animeSchema = new mongoose.Schema({
  title_jp: String,
  title_en: String,
  title_rom: String,
  title_other: [String],
  airing_date: Date,
  music_list: [mongoose.Schema.Types.ObjectId],
  links: {
    mal: String,
    adb: String,
    kitsu: String
  }
}, { collection: 'anime' });

/*
if(anime_result.upserted_id != None):
    season_result = seasonal_jpop.seasons.update_one({"year": anime_date.year}, {'$push': {anime_season: anime_result.upserted_id}}, upsert = True)
*/

const Anime = mongoose.model('Anime', animeSchema);

export default Anime;

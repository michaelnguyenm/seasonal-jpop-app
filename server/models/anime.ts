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
});

/*
"title_jp": music_obj.title_jp,
"title_en": music_obj.title_en,
"title_rom": music_obj.title_rom,
"catalog": music_obj.catalog,
"artist": music_obj.artist,
"release_date": music_obj.release_date,
"links": {
    "amazon": music_obj.links[MusicLink.amazon],
    "vgmdb": music_obj.links[MusicLink.vgmdb]
}
*/

/*
if(anime_result.upserted_id != None):
    season_result = seasonal_jpop.seasons.update_one({"year": anime_date.year}, {'$push': {anime_season: anime_result.upserted_id}}, upsert = True)
*/

const Anime = mongoose.model('Anime', animeSchema);

export default Anime;

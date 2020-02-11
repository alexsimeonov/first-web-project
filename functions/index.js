import { trendingGifs } from './trending.js';
import { uploadGif } from './upload.js';
import { uploadingEvent, copyLink, populateUploaded, searchImages, refresh, searchByEnter, } from './events.js';
import { favoriteImage, clickMakeFavorite } from './events.js';
import { getGiphySrc } from './copy-link.js';
import { displayUploaded } from './displayUploaded.js';
import { populateSearchedGifs } from './search.js'
import { targetEnterKey } from './search-by-enter.js';
import { showFavoriteFunction, recordFavorite } from './favorite-gifs.js'

$(() => {
  trendingGifs('#gifContainer');

  uploadingEvent(uploadGif);

  refresh(() => trendingGifs('#gifContainer'));

  searchByEnter(targetEnterKey);

  searchImages(populateSearchedGifs);

  copyLink(getGiphySrc);

  populateUploaded(displayUploaded);

  clickMakeFavorite(recordFavorite);

  favoriteImage(showFavoriteFunction);
});

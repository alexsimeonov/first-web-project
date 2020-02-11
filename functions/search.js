import { giphyView } from './views.js';
import { getSearchResults } from './gif-service.js';

// populate Gifs
const showGifs = (gifs) => {
  // clean gif div
  const $div = $('#gifContainer')
  $div.empty();
  if ($('#searchText').val() !== '') {
    $('#titleDiv').empty();
    $('#titleDiv').append(`<h1>${$('#searchText').val()} GIFs</h1>`);
  } else {
    $('#titleDiv').empty();
    $('#titleDiv').append(`<h1>Please enter a keyword to search!</h1>`);
  }
  // destructure JSON to get gif array
  const { data } = gifs
  // add each gif to gif div
  data.forEach((gif) => {
    giphyView(gif, $div);
  });
  // clear search text
  $('#searchText').val('')
}

const populateSearchedGifs = async () => {
  // get search text from the searchbox
  const searchText = $('#searchText').val()
  // perform a text query to Giphy and get resulting JSON
  const searchResults = await getSearchResults(searchText)
  // populate gifs from the resulting JSON
  showGifs(searchResults)
}

export { populateSearchedGifs }


import { trendingRequest } from './gif-service.js'
import { giphyView } from './views.js'

const trendingGifs = async (container) => {
  const $div = $(container);

  try {
    // Send request to the Giphy API for the trending gifs.
    const response = await trendingRequest();
    // Parse the response to json format.
    const giphy = await response.json();
    $div.empty();
    $('#titleDiv').empty();
    $('#titleDiv').append('<h1>Trending GIFs</h1>');
    // Display all the gifs with the giphyView function.
    giphy.data.forEach((element) => {
      giphyView(element, container);
    });
  } catch (error) {
    // If there is an error here we catch it.
    console.log(error.message);
  }
};

export {
  trendingGifs,
}

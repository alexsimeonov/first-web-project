// IMPLEMENTATION FOR MULTIPLE FAVORITES

import { favoriteView, uploadedView } from './views.js'
import { getFavouriteGifsRequest } from './gif-service.js'
import { randomURL, API_KEY } from './urlregister.js'

const getRandomImage = async () => {
  const response = await fetch(`${randomURL}?api_key=${API_KEY}`)
  // extract JSON from HTTP response
  return response.json()
}

const showFavoriteFunction = async () => {
  // clear div
  const $div = $('#gifContainer')
  const $upperDiv = $('#upperDiv');
  $('#titleDiv').empty();
  $('#titleDiv').append('<h1>Favorite GIFs</h1>');
  // $upperDiv.empty();
  $div.empty();
  // Check browser support
  if (typeof (Storage) !== 'undefined') {
    // Store
    if (localStorage.getItem('multipleFavoriteImages') !== null) {
      const showFavorite = async (gifsQuery) => {
        try {
          // get multiple gifs seperated by comma
          const response = await getFavouriteGifsRequest(gifsQuery);
          const giphy = await response.json();
          $div.empty();
          $upperDiv.empty();
          // show retrieved gifs
          giphy.data.forEach((gif) => {
            uploadedView(gif, $upperDiv);
          });
        } catch (error) {
          console.log(error.message);
        }
      }
      showFavorite(localStorage.getItem('multipleFavoriteImages'), '#upperDiv')
    } else {
      $upperDiv.empty();
      $upperDiv.append(`<h3 id="choseFav">PLEASE SET SOME FAVORITES! UNTIL THEN WE ARE SHOWING YOU A RANDOM GIF!</h3>`);
      const randomResult = await getRandomImage()
      const gif = randomResult.data
      favoriteView(gif, $upperDiv)
    }
  } else {
    $upperDiv.append(`<h1>Sorry, your browser does not support Web Storage...</h1>`);
  }
}


const recordFavorite = (id) => {
  // make clicked image favorite
  const element = $(id)
  element.id = 'clickedButton'
  const selectedImage = ($(id.target.parentElement.parentElement.parentElement.children[0]))
  const imageId = (selectedImage.attr('img-id'))
  const tempImages = localStorage.getItem('multipleFavoriteImages')
  if (tempImages === null) {
    localStorage.setItem('multipleFavoriteImages', `${imageId}`)
  } else {
    localStorage.setItem('multipleFavoriteImages', `${tempImages},${imageId}`)
  }
}

export { showFavoriteFunction, recordFavorite }

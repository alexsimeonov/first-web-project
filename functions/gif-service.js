import { uploadURL, trendingURL, uploadedURL, getGifsURL, randomURL, API_KEY, searchURL } from './urlregister.js';


const uploadRequest = (file) => fetch(uploadURL, {
  method: 'POST',
  body: file,
});


const trendingRequest = () => fetch(trendingURL);

const uploadedRequest = (string) => fetch(`${uploadedURL}ids=${string}`);

const getFavouriteGifsRequest = (string) => fetch(`${getGifsURL}?api_key=${API_KEY}&ids=${string}`);

const getRandomGif = () => fetch(`${randomURL}?api_key=${API_KEY}`);

const getSearchResults = async (query) => {
  const response = await fetch(`${searchURL}&q=${query}`)
  return response.json()
};

export {
  trendingRequest,
  uploadRequest,
  uploadedRequest,
  getFavouriteGifsRequest,
  getRandomGif,
  getSearchResults
}


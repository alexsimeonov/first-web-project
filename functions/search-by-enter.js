import { populateSearchedGifs } from './search.js'

const targetEnterKey = (event) => {
  // Check if the pressed key is enter.
  if (event.which === 13) {
    // If the check is true populate the gifs.
    populateSearchedGifs();
  }
};


export { targetEnterKey };

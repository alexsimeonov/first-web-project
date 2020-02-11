// Function which append giphy to the HTML and shoshs details.

const giphyView = (giphy, container) => {
  const $upperDiv = $('#upperDiv');
  const $div = $(container);
  $upperDiv.empty();

  // Append current gif to the HTML.
  $div.append(`
  <div class="gif-div"> 
      <img img-id=${giphy.id} src = "${giphy.images.fixed_width_downsampled.url}" /> 
      <div class="dropdown-content">
        <span>${giphy.title}</span></br>
        <span id="detailData">${new Date(giphy.import_datetime).toDateString()}</span></br>
        </br>
        <span><button class="copyLinkBtn" id="copy-link-button">Copy Link</button></span>
        <span><button id="makeFavoriteBtn">Favorite</button></span>
      </div>
  </div>
  `);
}


// Function, appending the uploaded GIFs to the HTML.

const uploadedView = (giphy, container) => {
  const $upperDiv = $(container);

  $upperDiv.append(`<img img-id=${giphy.id} src = "${giphy.images.fixed_width_downsampled.url}" />`);
}

const favoriteView = (imageMetaData, container) => {
  const $div = $(container);
  $('#titleDiv').empty();
  $('#titleDiv').append('<h1>Favorite GIFs</h1>');
  $div.append(`<div class="favorite-div">
  <img img-id=${imageMetaData.id} src="${imageMetaData.images.fixed_width_downsampled.url}" />
  </div>`)
}

export {
  giphyView,
  uploadedView,
  favoriteView
}

const searchImages = (callback) => $(document).on('click', '#searchBtn', callback);

const refresh = (callback) => $(document).on('click', '#logo', callback);

const uploadingEvent = (callback) => $(document).on('change', '#upload-input', callback);

const copyLink = (callback) => $(document).on('click', '.copyLinkBtn', callback);

const populateUploaded = (callback) => $(document).on('click', '#uploaded', callback);

const favoriteImage = (callback) => $(document).on('click', '#favBtn', callback);

const searchByEnter = (callback) => $(document).on('keydown', '#searchText', callback);

const clickMakeFavorite = (callback) => $(document).on('click', '#makeFavoriteBtn', callback);

export {
  searchImages,
  refresh,
  uploadingEvent,
  copyLink,
  populateUploaded,
  favoriteImage,
  searchByEnter,
  clickMakeFavorite,
}

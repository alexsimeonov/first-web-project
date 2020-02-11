import { uploadedView } from './views.js';
import { uploadedRequest } from './gif-service.js';

// Function, displaying the uploaded GIFs.

export const displayUploaded = async () => {
  const $div = $('#gifContainer');
  const $upperDiv = $('#upperDiv');

  // Sending request to the GIPHY API for getting the uploaded GIFs by their ids, stored in the local storage.
  const recievedGifs = await uploadedRequest(localStorage.uploaded);
  // Getting the response as json.
  const populateUploaded = await (recievedGifs.json());

  // Emptying the two containers and preparing the upperDiv to get populated.
  if (localStorage.getItem('uploaded') !== null) {
    $div.empty();
    $upperDiv.empty();
    $('#titleDiv').empty();
    $('#titleDiv').append('<h1>Uploaded GIFs</h1>');
    // Using the uploadedView function to populate the uploaded GIFs in the upperDiv.
    populateUploaded.data.forEach(element => {
      uploadedView(element, $upperDiv);
    });
  } else {
    $div.empty();
    $('#titleDiv').empty();
    $('#titleDiv').append('<h1>Uploaded GIFs</h1>');
    $upperDiv.empty();
    $upperDiv.append('<h1 id="no-uploaded">No GIFs uploaded yet</h1>');
  }
}

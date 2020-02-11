import { uploadRequest } from './gif-service.js';

// Function for uploading GIFs directly to the GIPHY app.

export const uploadGif = async (event) => {

  try {
    // Gets the first (and only) element, uploaded at that time.
    const fileObject = event.target.files[0];
    // Creating FormData and appending the fileObject to it.
    const formData = new FormData();
    formData.append('file', fileObject);
    // Sending the request for uploading.
    const response = await uploadRequest(formData);
    const result = await response.json();
    /* Getting the id of the GIF from the uploadRequest response
      and storing it in the local storage for further use in the displayUploaded function */
    const uploadedId = result.data.id;
    let uploaded = localStorage.getItem('uploaded');
    uploaded = uploaded ? `${uploaded},${uploadedId}` : uploadedId;
    localStorage.setItem('uploaded', uploaded);
  } catch (error) {
    console.log(error);
  }
}


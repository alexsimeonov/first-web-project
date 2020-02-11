// Copy to the clipboard with async function.

const getGiphySrc = async (event) => {
  // Get the SRC of the current giphy.
  try {
    const imageUrl = $(event.target).parents('.dropdown-content').siblings('img').attr('src');
    const res = await navigator.clipboard.writeText(imageUrl)
  } catch (error) {
    // If there is an error here we catch it.
    console.log(error.message);
  }

  // Another way to copy to the clipboard.

  // const el = document.createElement('textarea');
  // el.value = imageUrl;
  // document.body.appendChild(el);
  // el.select();
  // document.execCommand('copy');
  // document.body.removeChild(el);
}


export { getGiphySrc };

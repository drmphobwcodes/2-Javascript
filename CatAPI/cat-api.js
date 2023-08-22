//define the the URL for Cat API endPoint that returns random cat images https://api.thecatapi.com/v1/images/search
const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search';

async function fetchRandomCatImage() {
  try {
    let response = await fetch(CAT_API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    let data = await response.json();
    return data[0].url;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error.message);
  }
}

function displayCatImage(url) {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = `<img src="${url}" alt="Random Cat" class="cat-image">`;
  }
  
  document.getElementById('fetch-cat-button').addEventListener('click', async () => {
    const imageUrl = await fetchRandomCatImage();
    if (imageUrl) {
      displayCatImage(imageUrl);
    }
  });



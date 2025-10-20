import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// const { default: axios } = require("axios")

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  fetch('https://pixabay.com/api/?key=52857453-560792bcb66dbe1ba9d4bb66c&q=query&image_type=photo&orientation=horizontal&safesearch=true')
    .then((response) => {
      // обробка успішного запиту
      return response.json()
    })
    .then(data => {
      const markup = getImagesByQuery(data.hits);
      document.querySelector('.gallery').innerHTML = markup;
    })
    .catch((error) => {
      // обробка помилки
      iziToast.error({
        message: `Sorry, there are no images matching your search query. Please try again!`,
        position: 'topRight',
      })
    })
});

function getImagesByQuery(images) {
    return images
      .map(({ webformatURL, tags, likes }) => {
        return `
        <div class="photo-card">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          <div class="info">
            <p><b>Likes:</b> ${likes}</p>
          </div>
        </div>
      `;
      })
      .join('');
  };
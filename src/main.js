import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';

import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

let userTag;

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  refs.gallery.innerHTML = '';
  userTag = e.target.elements.search.value.trim();
  console.log(userTag);
  if (userTag === '') {
    iziToast.error({
      position: 'bottomCenter',
      icon: '',
      message: 'Please, write something',
    });
    return;
  }

  refs.loader.style.display = 'block';

  getPicturesByUserTag(userTag)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          position: 'bottomCenter',
          icon: '',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      } else {
        renderPhotos(data.hits);
      }
    })
    .catch(err => console.log(err))
    .finally(() => (refs.loader.style.display = 'none'));

  e.target.reset();
}

function getPicturesByUserTag(userTag) {
  const API_KEY = '42263237-cb79a6606f476b00f134f6b96';
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${userTag}&image_type=photo&orientation=horizontal&safesearch=true`;
  return fetch(url).then(res => res.json());
}

function markupTemplate(hits) {
  const galleryMarkup = hits
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
        <a
          class="gallery-link"
          href='${largeImageURL}'
        >
          <img
            class="gallery-image"
            src='${webformatURL}'
            data-source="large-image.jpg"
            alt='${tags}'
          />
        </a>
        <ul class="image-desc-list">
          <li class="image-desc-item">
            <h3 class="image-desc-title">Likes</h3>
            <p class="image-desc-text">${likes}</p>
          </li>
          <li class="image-desc-item">
            <h3 class="image-desc-title">Views</h3>
            <p class="image-desc-text">${views}</p>
          </li>
          <li class="image-desc-item">
            <h3 class="image-desc-title">Comments</h3>
            <p class="image-desc-text">${comments}</p>
          </li>
          <li class="image-desc-item">
            <h3 class="image-desc-title">Downloads</h3>
            <p class="image-desc-text">${downloads}</p>
          </li>
        </ul>
      </li>`;
      }
    )
    .join('');

  return galleryMarkup;
}

function renderPhotos(hits) {
  const markup = markupTemplate(hits);
  refs.gallery.insertAdjacentHTML('afterbegin', markup);

  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionPosition: 'bottom',
    captionsData: 'alt',
  });
  lightbox.on('show.simplelightbox');
  lightbox.refresh();
}

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { markupTemplate } from './markupTemplate';
import { refs } from './refs';

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionPosition: 'bottom',
  captionsData: 'alt',
});

export function renderPhotos(hits) {
  const markup = markupTemplate(hits);
  refs.gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
  lightbox.on('show.simplelightbox');
}

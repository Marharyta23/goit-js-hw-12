import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { markupTemplate } from './markupTemplate';
import { refs } from './refs';

export function renderPhotos(hits) {
  const markup = markupTemplate(hits);
  refs.gallery.insertAdjacentHTML('beforeend', markup);

  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionPosition: 'bottom',
    captionsData: 'alt',
  });
  lightbox.on('show.simplelightbox');
  lightbox.refresh();
}

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getPicturesByUserTag } from './js/getPicturesByUserTag';
import { renderPhotos } from './js/renderPhotos';
import { refs } from "./refs";


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





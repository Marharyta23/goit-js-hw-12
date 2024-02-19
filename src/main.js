import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getPicturesByUserTag } from './js/getPicturesByUserTag';
import { renderPhotos } from './js/renderPhotos';
import { refs } from './js/refs';
import { checkBtnStatus } from './js/checkBtnStatus';
let userTag;
let page;

refs.form.addEventListener('submit', onFormSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

async function onFormSubmit(e) {
  e.preventDefault();

  refs.gallery.innerHTML = '';
  refs.loadMoreBtn.classList.add('hidden');

  userTag = e.target.elements.search.value.trim();
  page = 1;

  if (!userTag) {
    iziToast.error({
      position: 'bottomCenter',
      icon: '',
      message: 'Please, write something',
    });
    return;
  }

  try {
    const data = await getPicturesByUserTag(userTag, page);
    refs.loader.classList.remove('hidden');
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
      refs.loader.classList.add('hidden');
      checkBtnStatus(data, page);
    }
  } catch (err) {
    console.log(err);
  }

  e.target.reset();
}

async function onLoadMore() {
  page += 1;

  refs.loadMoreBtn.classList.add('hidden');
  refs.loader2.classList.remove('hidden');

  try {
    const data = await getPicturesByUserTag(userTag, page);
    renderPhotos(data.hits);
    checkBtnStatus(data, page);
    refs.loader2.classList.add('hidden');
  } catch (err) {
    console.log(err);
  }

  const card = refs.gallery.firstElementChild.getBoundingClientRect();
  const { height } = card;

  scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}

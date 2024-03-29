import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { refs } from './refs';

export function checkBtnStatus(data, page) {
  const maxPage = Math.ceil(data.totalHits / 15);
  console.log(maxPage);
  const isLastPage = maxPage <= page;
  if (isLastPage) {
    refs.loadMoreBtn.classList.add('hidden');
    refs.loader2.classList.add('hidden');
    iziToast.show({
      position: 'bottomCenter',
      color: 'yellow',
      message: "We're sorry, but you've reached the end of search results.",
    });
  } else {
    refs.loadMoreBtn.classList.remove('hidden');
  }
}

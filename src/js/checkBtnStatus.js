import { refs } from './refs';

export function checkBtnStatus(data, page) {
  const maxPage = Math.ceil(data.totalHits / data.hits.length);
  const isLastPage = maxPage <= page;
  if (isLastPage) {
    refs.loadMoreBtn.classList.add('hidden');
    iziToast.show({
      position: 'bottomCenter',
      color: 'yellow',
      message: "We're sorry, but you've reached the end of search results.",
    });
  } else {
    refs.loadMoreBtn.classList.remove('hidden');
  }
}

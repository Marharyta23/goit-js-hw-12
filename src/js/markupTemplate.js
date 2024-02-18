export function markupTemplate(hits) {
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
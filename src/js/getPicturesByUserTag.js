export function getPicturesByUserTag(userTag) {
  const API_KEY = '42263237-cb79a6606f476b00f134f6b96';
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${userTag}&image_type=photo&orientation=horizontal&safesearch=true`;
  return fetch(url).then(res => res.json());
}
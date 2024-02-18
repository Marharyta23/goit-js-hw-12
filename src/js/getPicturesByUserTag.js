import axios from 'axios';

export async function getPicturesByUserTag(userTag, pageCount) {
  const API_KEY = '42263237-cb79a6606f476b00f134f6b96';
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${userTag}&image_type=photo&orientation=horizontal&safesearch=true`;

  const params = {
    page: pageCount,
    per_page: 15,
  };

  const res = await axios.get(url, { params });
  return res.data;
}

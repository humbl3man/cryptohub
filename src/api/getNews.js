import axios from 'axios';

import { baseURI } from './config';

export default function getNews(filter, limit = 10) {
  return axios.get(`${baseURI}/news/${filter}/?skip=0&limit=${limit}`);
}

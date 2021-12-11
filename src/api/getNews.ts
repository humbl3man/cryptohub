import axios from 'axios';

import { baseURI } from './config';

export default function getNews(filter: string, limit: number = 10) {
  return axios.get(`${baseURI}/news/${filter}/?skip=0&limit=${limit}`);
}
